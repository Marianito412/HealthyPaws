import {
    ActionIcon,
    Badge, Button,
    Card,
    Group,
    Image, Menu,
    Space,
    Stack,
    Table,
    Text,
    Title
} from "@mantine/core";
import {IconCancel, IconClipboardText} from "@tabler/icons-react";
import {mockCitas} from "../../../mockdata/MockData.tsx";
import dayjs from "dayjs";

export function CitasVet() {

    const citasHoy = mockCitas.filter((element) => {
        return dayjs(element.date).isSame(dayjs(), "day")
    })
    
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
    
    const pendientesCards = mockCitas.map((element) => {
        return (
            <Card radius="lg">
                <Group>
                    <Image radius="md" h={30} w={30}></Image>
                    <div>
                        <Title order={3}>{element.petName}</Title>
                        <Text c="dimmed">{element.ownerName}</Text>
                    </div>
                </Group>
                <Text size="sm" c="dimmed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec arcu dignissim, volutpat sapien eget, pharetra nulla. Quisque in mauris nec odio dapibus consectetur sagittis ut ipsum. Donec id viverra nisi, sit amet aliquam est.
                </Text>
                <Group justify="center" align="center" wrap="nowrap" gap="xs">
                    <Button variant="light" fullWidth>Confirmar</Button>
                    <Button variant="light" color="dark.2">
                        <IconCancel/>
                    </Button>
                </Group>
            </Card>
        )
    })
    
    return (
        <div>
            <Title order={1}>Citas</Title>
            <Space h="lg"/>
            <Group justify="space-evenly" align="flex-start" wrap="nowrap">
                <Card style={{width:'70%'}} radius="lg">
                    <Group justify="space-between">
                        <Title order={2}>Citas del día</Title>
                        <Badge color="indigo" variant="light">Hoy: {dayjs().format("MMMM DD")}</Badge>
                    </Group>
                    
                    <Table highlightOnHover>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Hora</Table.Th>
                                <Table.Th>Paciente</Table.Th>
                                <Table.Th>Motivo</Table.Th>
                                <Table.Th>Estado</Table.Th>
                                <Table.Th>Opciones</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {citasHoy.map((cita) => {
                                return (
                                    <Table.Tr key={cita.id} onClick={() => {console.log(cita)}}>
                                        <Table.Td>{cita.time}</Table.Td>
                                        <Table.Td>
                                            <Text><b>{cita.petName}</b></Text>
                                            <Text style={{marginTop: 0}} c="dimmed">{cita.ownerName}</Text>
                                        </Table.Td>
                                        <Table.Td>{cita.reason}</Table.Td>
                                        <Table.Td>
                                            <Badge color={getStatusColor(cita.status)}>{cita.status}</Badge>
                                        </Table.Td>
                                        <Table.Td>
                                            <Menu trigger="hover" openDelay={100} closeDelay={400}>
                                                <Menu.Target>
                                                    <ActionIcon variant="filled" color="gray" aria-label="Actions">
                                                        <IconClipboardText style={{ width: '100%', height: '100%' }} />
                                                    </ActionIcon>
                                                </Menu.Target>
                                                <Menu.Dropdown>
                                                    <Menu.Item color="green">Iniciar Cita</Menu.Item>
                                                    <Menu.Divider/>
                                                    <Menu.Label>Zona de peligro</Menu.Label>
                                                    <Menu.Item>Reagendar Cita</Menu.Item>
                                                    <Menu.Item color="red">Cancelar Cita</Menu.Item>
                                                </Menu.Dropdown>
                                            </Menu>
                                        </Table.Td>
                                    </Table.Tr>
                                )
                            })}
                        </Table.Tbody>
                    </Table>
                </Card>
                <Card  bg="dark.8" radius="lg" style={{maxWidth:'20%'}}>
                    <Group justify="space-between">
                        <Title order={2}>Solicitudes Pendientes</Title>
                        <Badge color="indigo" variant="light">
                            {mockCitas.filter((element) => {
                                return element.status == "pending"
                            }).length} New
                        </Badge>
                    </Group>
                    <Stack>
                        {pendientesCards}
                    </Stack>
                </Card>
            </Group>
        </div>
    );
}