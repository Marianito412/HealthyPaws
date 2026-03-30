import { Table, AppShell, ActionIcon } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { IconInfoSquareRounded } from '@tabler/icons-react';
import { NavbarMinimalColored} from '../components/NavBar/NavBar';
import type { ReactNode } from 'react';


export function HomePageTest() {
  let params = useParams()
  
  const mockData = [
    {nombre: "Test", dosis: "3 veces al día"},
    {nombre: "Test", dosis: "1 vez al día, en ayuno"},
    {nombre: "Test", dosis: "2 veces al día"},
    {nombre: "Test", dosis: "1 vez al día"},
  ]

  const rows: ReactNode = mockData.map((element) => {
    return (
      <Table.Tr>
        <Table.Td>{element.nombre}</Table.Td>
        <Table.Td>{element.dosis}</Table.Td>
        <Table.Td>
          <ActionIcon>
            <IconInfoSquareRounded></IconInfoSquareRounded>
          </ActionIcon>
        </Table.Td>
      </Table.Tr>
    )});

  return (
    <AppShell navbar={{ width: 80, breakpoint: 'sm' }} // Adjust width to match your NavbarMinimal width
      padding="md">

        <AppShell.Navbar>
          <NavbarMinimalColored selectedLabel={params.section!} />
        </AppShell.Navbar>

        <AppShell.Main>
          <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nombre</Table.Th>
              <Table.Th>Dosis</Table.Th>
              <Table.Th>Detalles</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows}
          </Table.Tbody>
          </Table>
        </AppShell.Main>
        

    </AppShell>
  );
}
