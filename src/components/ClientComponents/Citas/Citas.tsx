import {
    Title, Text, Card, Space, Stack, Button,
    Group, Timeline, TimelineItem, Badge, Accordion
} from "@mantine/core";
import {mockCitas} from "../../../mockdata/MockData.tsx";
import dayjs from "dayjs";

export function Citas() {

    let confirmedCitas: number = 0;
    
    const getUrgencyColor = (urgency: string) => {
        switch (urgency) {
            case "low":
                return "green";
            case "medium":
                return "orange";
            case "high":
                return "red";
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "completed":
                return "blue";
            case "pending":
                return "orange"
            case "confirmed":
                return "green";
            case "cancelled":
                return "red";
        }
    }
    
    let upcomingCitas = mockCitas
        .filter((value) => {return (value.status != 'completed') && (value.status != 'cancelled');})
        .toSorted((a, b) => (a.status=="confirmed" ? 0:1) - (b.status=="confirmed" ? 0:1))
        .map((element, index) => {
            if (element.status == "confirmed") {confirmedCitas = index;}
            return (
                <TimelineItem title={element.petName} key={index}>
                    <Group justify="space-between">
                        <div>
                            <Text c="dimmed" size="sm">
                                {dayjs(element.date).format("DD/MM/YYYY") + " a las " + element.time}</Text>
                            <Text size="xs" mt={4}>N minutes ago</Text>
                        </div>
                        <Group>
                            <Badge color={getUrgencyColor(element.urgency)}>{element.urgency}</Badge>
                            <Badge color={getStatusColor(element.status)}>{element.status}</Badge>
                        </Group>
                    </Group>
                </TimelineItem>
            )
        })
    
    let previousCitas = mockCitas
        .filter((value) => {return value.status == "completed"})
        .map((element, index) => {
            return (
                <Accordion.Item key={index} value={element.id}>
                    <Accordion.Control>
                            <Text>{element.petName}</Text>
                            <Text c="dimmed">{dayjs(element.date).format("DD/MM/YYYY")} - {element.reason}</Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Text>Hora: {element.time}</Text>
                        <Card bg="dark.5" variant="light" shadow="md">
                            <Text>Notas: </Text>
                            <Text c="dimmed">{element.notes}</Text>
                        </Card>
                    </Accordion.Panel>
                </Accordion.Item>
            )
        });
    
    return (
        <>
            <Title order={1}>Citas</Title>
            <Space h="lg"/>
            <Stack>
                <Card>
                    <Group justify="space-between">
                        <Title order={2}>Citas</Title>
                        <Button variant="filled">
                            <Title order={3}>Solicitar Cita</Title>
                        </Button>
                    </Group>
                    <Timeline active={confirmedCitas} bulletSize={24} lineWidth={2}>
                        {upcomingCitas}
                    </Timeline>
                </Card>
                <Card>
                    <Title order={2}>Historial</Title>
                    <Accordion>
                        {previousCitas}
                    </Accordion>
                </Card>
            </Stack>
        </>
    );
}
