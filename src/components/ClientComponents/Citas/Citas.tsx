import {
    Title, Text, Card, Space, Stack, Button,
    Group, Timeline, TimelineItem, Badge, Accordion
} from "@mantine/core";
import {mockCitas} from "../../../mockdata/MockData.tsx";
import dayjs from "dayjs";

export function Citas() {

    let upcomingCitas = mockCitas
        .filter((value) => {return (value.status != 'completed') && (value.status != 'cancelled');})
        .map((element, index) => {
            return (
                <TimelineItem title={element.petName} key={index}>
                    <Group justify="space-between">
                        <div>
                            <Text c="dimmed" size="sm">
                                {dayjs(element.date).format("DD/MM/YYYY") + " a las " + element.time}</Text>
                            <Text size="xs" mt={4}>N minutes ago</Text>
                        </div>
                        <Group>
                            <Badge>{element.urgency}</Badge>
                            <Badge>{element.status}</Badge>
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
                        <Card bg="gray.8" shadow="md">
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
                    <Timeline active={0} bulletSize={24} lineWidth={2}>
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
