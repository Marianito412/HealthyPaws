import {
    Title, Text, Card, Space, Stack, Button,
    Group, Timeline, TimelineItem, Badge, Accordion, Modal, Select, TextInput, Textarea
} from "@mantine/core";
import {mockCitas} from "../../../mockdata/MockData.tsx";
import dayjs from "dayjs";
import {useState} from "react";

export function Citas() {
    let [modalOpened, setModalOpened] = useState(false);
    let [newAppointment, setNewAppointment] = useState({
        petName: '',
        date: '',
        time: '',
        reason: '',
        urgency: 'low' as 'low' | 'medium' | 'high',
    });
    
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
    
    const addCita = () => {
        setModalOpened(false);
        setNewAppointment({ petName: '', date: '', time: '', reason: '', urgency: 'low' });
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
                        <Button variant="filled" onClick={() => {setModalOpened(true)}}>
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
            <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Solicitar nueva cita">
                <Stack>
                    <Select
                        label="Mascota"
                        placeholder="Selecciona una mascota"
                        data={[
                            { value: 'Max', label: 'Max' },
                            { value: 'Luna', label: 'Luna' },
                        ]}
                        value={newAppointment.petName}
                        onChange={(value) => setNewAppointment({ ...newAppointment, petName: value || '' })}
                    />
                    <TextInput
                        label="Fecha"
                        type="date"
                        value={newAppointment.date}
                        onChange={(e) => setNewAppointment({ ...newAppointment, date: e.currentTarget.value })}
                    />
                    <TextInput
                        label="Hora"
                        type="time"
                        value={newAppointment.time}
                        onChange={(e) => setNewAppointment({ ...newAppointment, time: e.currentTarget.value })}
                    />
                    <Textarea
                        label="Motivo de la cita"
                        placeholder="Describe el motivo de la consulta"
                        value={newAppointment.reason}
                        onChange={(e) => setNewAppointment({ ...newAppointment, reason: e.currentTarget.value })}
                    />
                    <Select
                        label="Urgencia"
                        data={[
                            { value: 'low', label: 'Baja' },
                            { value: 'medium', label: 'Media' },
                            { value: 'high', label: 'Alta' },
                        ]}
                        value={newAppointment.urgency}
                        onChange={(value) => setNewAppointment({ ...newAppointment, urgency: (value as any) || 'low' })}
                    />
                    <Group justify="flex-end" mt="md">
                        <Button variant="subtle" onClick={() => setModalOpened(false)}>
                            Cancelar
                        </Button>
                        <Button onClick={addCita}>Solicitar cita</Button>
                    </Group>
                </Stack>
            </Modal>
        </>
    );
}
