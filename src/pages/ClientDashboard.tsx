import {AppShell } from '@mantine/core';
import { useParams } from 'react-router-dom';
import {mockButtonsClient} from "../mockdata/MockData.tsx";
import { NavbarMinimalColored} from '../components/NavBar/NavBar';
import { Medicamentos } from '../components/ClientComponents/Medicamentos/Medicamentos';
import { Citas } from '../components/ClientComponents/Citas/Citas';
import type { ReactNode } from 'react';
import {Mascotas} from "../components/ClientComponents/Mascotas/Mascotas.tsx";


export function ClientDashboard() {
    let params = useParams<{ section: string }>()

    const test: Record<string, ReactNode> = {
        Mascotas: <Mascotas/>,
        Medicamentos: <Medicamentos/>,
        Citas: <Citas/>
    }

    let Comp: ReactNode = test[params.section!];

    return (
        <AppShell navbar={{width: 80, breakpoint: 'sm'}}
                  padding="md">

            <AppShell.Navbar>
                <NavbarMinimalColored selectedLabel={params.section!} labels={mockButtonsClient}/>
            </AppShell.Navbar>

            <AppShell.Main>
                {Comp}
            </AppShell.Main>
        </AppShell>
    );
}
