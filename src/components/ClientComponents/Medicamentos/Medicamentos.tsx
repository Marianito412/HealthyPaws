import {Table, Title, Modal, Text, Card, Space, Stack, Badge} from '@mantine/core';
import {useState} from "react";
import {mockMedicamentos, type Medicamento} from "../../../mockdata/MockData.tsx";

export function Medicamentos(){
    const [selectedMed, setSelectedMed] = useState<Medicamento | null>(null);

    const medsActivos = mockMedicamentos.filter((element) => {return element.active})
    
    const medsInactivos = mockMedicamentos.filter((element) => {return !element.active})
    
    return (
        <>
            <Title order={1}>Medicamentos</Title>
            <Space h="lg"/>
            <Stack>
                <Card>
                    <Title order={2} mb="md">Medicamentos activos</Title>
                    <Table highlightOnHover>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Mascota</Table.Th>
                                <Table.Th>Medicamento</Table.Th>
                                <Table.Th>Dosis</Table.Th>
                                <Table.Th>Duración</Table.Th>
                                <Table.Th>Estado</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {medsActivos.map((element) => {
                                return (
                                    <Table.Tr key={element.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedMed(element)}>
                                        <Table.Td>{element.petName}</Table.Td>
                                        <Table.Td>{element.name}</Table.Td>
                                        <Table.Td>{element.dose}</Table.Td>
                                        <Table.Td>{element.duration}</Table.Td>
                                        <Table.Td>
                                            <Badge color={element.active ? "green":"grey"}>{element.active ? "Activo":"Inactivo"}</Badge>
                                        </Table.Td>
                                    </Table.Tr>
                                );
                            })}
                        </Table.Tbody>
                    </Table>
                </Card>
                <Card>
                    <Title order={2} mb="md">Medicamentos inactivos</Title>
                    <Table highlightOnHover>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Mascota</Table.Th>
                                <Table.Th>Medicamento</Table.Th>
                                <Table.Th>Dosis</Table.Th>
                                <Table.Th>Duración</Table.Th>
                                <Table.Th>Estado</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {medsInactivos.map((element) => {
                                return (
                                    <Table.Tr key={element.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedMed(element)}>
                                        <Table.Td>{element.petName}</Table.Td>
                                        <Table.Td>{element.name}</Table.Td>
                                        <Table.Td>{element.dose}</Table.Td>
                                        <Table.Td>{element.duration}</Table.Td>
                                        <Table.Td>
                                            <Badge color={element.active ? "green":"grey"}>{element.active ? "Activo":"Inactivo"}</Badge>
                                        </Table.Td>
                                    </Table.Tr>
                                );
                            })}
                        </Table.Tbody>
                    </Table>
                </Card>
            </Stack>
            <Modal 
                opened={selectedMed != null} 
                onClose={() => {setSelectedMed(null)}}
            >
                <Stack>
                    <div>
                        <Text c="dimmed">Medicamento</Text>
                        <Text>{selectedMed?.name}</Text>
                    </div>
                    <div>
                        <Text c="dimmed">Dosis</Text>
                        <Text>{selectedMed?.dose}</Text>
                    </div>
                    <div>
                        <Text c="dimmed">Duración</Text>
                        <Text>{selectedMed?.duration}</Text>
                    </div>
                    <div>
                        <Text c="dimmed">Frecuencia</Text>
                        <Text>{selectedMed?.frequency}</Text>
                    </div>
                    <div>
                        <Card bg="blue.9">
                            <b>Instrucciones</b>
                            <Text>{selectedMed?.instructions}</Text>
                        </Card>
                    </div>
                    <div>
                        <Card bg="red.9">
                            <b>Contraindicaciones</b>
                            <Text>{selectedMed?.contraindications}</Text>
                        </Card>
                    </div>
                </Stack>
            </Modal>
        </>
    );
}