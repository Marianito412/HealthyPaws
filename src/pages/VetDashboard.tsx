import {AppShell } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { NavbarMinimalColored} from '../components/NavBar/NavBar';
import type { ReactNode } from 'react';
import {CitasVet} from "../components/VetComponents/Citas/CitasVet.tsx";
import {mockButtonsVet} from "../mockdata/MockData.tsx";

export function VetDashboard() {
    let params = useParams<{ section: string }>()

    const test: Record<string, ReactNode> = {
        Medicamentos: <h1>test</h1>,
        Citas: <CitasVet/>
    }

    let Comp: ReactNode = test[params.section!];

    return (
        <AppShell navbar={{width: 80, breakpoint: 'sm'}} // Adjust width to match your NavbarMinimal width
                  padding="md">

            <AppShell.Navbar>
                <NavbarMinimalColored selectedLabel={params.section!} labels={mockButtonsVet}/>
            </AppShell.Navbar>

            <AppShell.Main>
                {Comp}
            </AppShell.Main>
        </AppShell>
    );
}
