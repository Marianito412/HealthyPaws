import {mockMascotas, type Mascota, vaccineSchedule} from "../../../mockdata/MockData.tsx";
import {Badge, Modal, Button, Card, Grid, Group, Space, Stack, Text, Title, Table} from "@mantine/core";
import {useState} from "react";
import dayjs from "dayjs";

function MascotaCard({mascota, callback}: {mascota: Mascota, callback: ()=>void}){
    const getUpcomingVaccines = (pet: Mascota) => {
        const upcoming: Array<{ name: string; date: string }> = [];
        
        Object.entries(pet.vaccines).forEach(([name, vaccine]) => {
            if (!vaccine.applied) {
                upcoming.push({ name, date: "CalculateEstimatedDate" });
            }
        });
        return upcoming;
    };
    
    const upcomingVaccines = getUpcomingVaccines(mascota)
    const totalVaccines = Object.keys(mascota.vaccines).length;
    const appliedVaccines = Object.values(mascota.vaccines).filter((v) => v.applied).length;
    
    return <Card shadow="sm" padding="lg" withBorder>
        <Group justify="space-between" mb="xs">
            <Text>{mascota.name}</Text>
            <Badge color="blue" variant="light">
                {mascota.species === 'dog' ? 'Perro' : 'Gato'}
            </Badge>
        </Group>
        <Text size="sm" c="dimmed" mb="xs">
            Raza: {mascota.breed}
        </Text>
        <Text size="sm" c="dimmed" mb="sm">
            Fecha de nacimiento: {Date.parse(mascota.birthDate)}
        </Text>

        <Stack gap="xs" mb="md">
            <Text size="sm">
                Vacunas: {appliedVaccines}/{totalVaccines}
            </Text>
            {upcomingVaccines.length > 0 && (
                <Card padding="xs">
                    <Text size="xs" mb={4}>Próximas vacunas:</Text>
                    {upcomingVaccines.slice(0, 2).map((v) => (
                        <Text key={v.name} size="xs" c="dimmed">
                            • {v.name}: {v.date}
                        </Text>
                    ))}
                </Card>
            )}
        </Stack>

        <Button
            fullWidth
            variant="light"
            onClick={() => {callback()}}
        >
            Ver esquema de vacunación
        </Button>
    </Card>
}

export function Mascotas() {
    let [currentMascota, setCurrentMascota] = useState<Mascota | null>(null)

    const getEstimatedDate = (pet: Mascota, vaccineName: string) => {
        const schedule = pet.species === 'dog' ? vaccineSchedule.dog : vaccineSchedule.cat;
        const vaccine = schedule.find((v) => v.name === vaccineName);
        if (vaccine) {
            return dayjs(pet.birthDate).add(vaccine.weeks, 'week').format('DD/MM/YYYY');
        }
        return 'N/A';
    };
    
    return (
        <>
            <Title order={1}>Mascotas</Title>
            <Space h="lg"/>
            <Grid>
                {mockMascotas.map((element, index) => {
                    return (
                        <Grid.Col key={index} span={{base: 12, md: 6, lg: 4}}>
                            <MascotaCard mascota={element} callback={()=>{setCurrentMascota(element)}}/>
                        </Grid.Col>)
                })}
            </Grid>
            <Modal title={"Esquema de vacunas - " + currentMascota?.name} size="auto"
            opened={currentMascota != null}
            onClose={() => {setCurrentMascota(null)}}
            >
                {currentMascota && (
                    <Table>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Vacuna</Table.Th>
                                <Table.Th>Fecha estimada</Table.Th>
                                <Table.Th>Estado</Table.Th>
                                <Table.Th>Fecha de aplicación</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {Object.entries(currentMascota.vaccines).map(([name, vaccine]) => (
                                <Table.Tr key={name}>
                                    <Table.Td>{name}</Table.Td>
                                    <Table.Td>{getEstimatedDate(currentMascota, name)}</Table.Td>
                                    <Table.Td>
                                        <Badge color={vaccine.applied ? "blue":"orange"}>
                                            {vaccine.applied ? "Aplicada":"No aplicada"}
                                        </Badge>
                                    </Table.Td>
                                    <Table.Td>{vaccine.date ? dayjs(vaccine.date).format('DD/MM/YYYY') : '-'}</Table.Td>
                                </Table.Tr>
                            ))
                            }
                        </Table.Tbody>
                    </Table>
                )}
            </Modal>
        </>
    );
}