import {IconCalendarEventFilled, IconVaccineBottle, IconPawFilled, IconPillFilled} from "@tabler/icons-react";

export type Button = {
    icon: typeof IconVaccineBottle;
    href: string;
    label: string;
}

export const mockButtonsClient: Button[] = [
    { icon: IconPawFilled, href: 'Mascotas', label: 'Mascotas' },
    { icon: IconPillFilled, href: 'Medicamentos', label: 'Medicamentos' },
    { icon: IconCalendarEventFilled, href: 'Citas', label: 'Citas' },
];

export const mockButtonsVet: Button[] = [
    { icon: IconPillFilled, href: 'Vet/Medicamentos', label: 'Medicamentos' },
    { icon: IconCalendarEventFilled, href: 'Vet/Citas', label: 'Citas' }
];

export type Cita = {
    id: string,
    petName: string,
    ownerName: string,
    date: string,
    time: string,
    reason: string,
    urgency: 'low' | 'medium' | 'high',
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled',
    notes?: string
}

export const mockCitas: Cita[] = [
    {
        id: '1',
        petName: 'Max',
        ownerName: 'Juan Pérez',
        date: '2026-04-06',
        time: '10:00',
        reason: 'Revisión post-operatoria',
        urgency: 'medium',
        status: 'confirmed',
    },
    {
        id: '2',
        petName: 'Luna',
        ownerName: 'María García',
        date: '2026-04-05',
        time: '11:30',
        reason: 'Vacunación',
        urgency: 'low',
        status: 'confirmed',
    },
    {
        id: '2',
        petName: 'Luna',
        ownerName: 'María García',
        date: '2026-04-08',
        time: '14:30',
        reason: 'Revisión general',
        urgency: 'low',
        status: 'completed',
        notes: 'Luna está en excelente salud. Se aplicó vacuna contra calicivirus. Próxima cita en 3 meses.',
    },
    {
        id: '3',
        petName: 'Max',
        ownerName: 'Juan Pérez',
        date: '2026-03-15',
        time: '11:00',
        reason: 'Corte de uñas',
        urgency: 'low',
        status: 'completed',
        notes: 'Procedimiento completado sin complicaciones.',
    },
    {
        id: '3',
        petName: 'Rocky',
        ownerName: 'Carlos López',
        date: '2026-04-05',
        time: '14:00',
        reason: 'Malestar estomacal',
        urgency: 'high',
        status: 'pending',
    },
    {
        id: '4',
        petName: 'Mimi',
        ownerName: 'Ana Martínez',
        date: '2026-04-05',
        time: '15:30',
        reason: 'Control de peso',
        urgency: 'low',
        status: 'pending',
    },
]

export type vacSchedule = {
    [key: string]: { name: string, weeks: number }[];
}

export const vaccineSchedule: vacSchedule = {
    dog: [
        { name: 'Parvovirus', weeks: 6 },
        { name: 'Moquillo', weeks: 8 },
        { name: 'Hepatitis', weeks: 10 },
        { name: 'Rabia', weeks: 16 },
        { name: 'Leptospirosis', weeks: 12 },
    ],
    cat: [
        { name: 'Panleucopenia', weeks: 8 },
        { name: 'Calicivirus', weeks: 12 },
        { name: 'Rinotraqueitis', weeks: 16 },
        { name: 'Rabia', weeks: 16 },
        { name: 'Leucemia Felina', weeks: 12 },
    ],
};

export type Medicamento = {
    id: string;
    petName: string;
    name: string;
    dose: string;
    frequency: string;
    duration: string;
    instructions: string;
    contraindications?: string;
    method: string;
    active: boolean;
}

export const mockMedicamentos: Medicamento[] = [
    {
        id: '1',
        petName: 'Max',
        name: 'Amoxicilina',
        dose: '250mg',
        frequency: 'Cada 12 horas',
        duration: '7 días',
        instructions: 'Administrar con comida',
        contraindications: 'No administrar si hay alergia a penicilinas',
        method: 'Vía oral',
        active: true,
    },
    {
        id: '2',
        petName: 'Luna',
        name: 'Desparasitante',
        dose: '1 tableta',
        frequency: 'Dosis única',
        duration: '1 día',
        instructions: 'Administrar en ayunas',
        method: 'Vía oral',
        active: true,
    },
    {
        id: '3',
        petName: 'Max',
        name: 'Anti-inflamatorio',
        dose: '50mg',
        frequency: 'Cada 24 horas',
        duration: '5 días',
        instructions: 'Administrar después de comer',
        contraindications: 'No combinar con otros AINEs',
        method: 'Vía oral',
        active: false,
    },
]

export type Mascota = {
    id: string,
    name: string,
    species: string,
    breed: string,
    birthDate: string,
    ownerName: string,
    ownerContact: string,
    vaccines: { [key: string]: { applied: boolean, date?: string } }
}

export const mockMascotas: Mascota[] = [
    {
        id: '1',
        name: 'Max',
        species: 'dog',
        breed: 'Labrador',
        birthDate: '2023-01-15',
        ownerName: 'Juan Pérez',
        ownerContact: 'juan@email.com',
        vaccines: {
            Parvovirus: { applied: true, date: '2023-02-26' },
            Moquillo: { applied: true, date: '2023-03-12' },
            Hepatitis: { applied: false },
            Rabia: { applied: false },
            Leptospirosis: { applied: true, date: '2023-03-26' },
        },
    },
    {
        id: '2',
        name: 'Luna',
        species: 'cat',
        breed: 'Siamés',
        birthDate: '2024-06-10',
        ownerName: 'María García',
        ownerContact: 'maria@email.com',
        vaccines: {
            Panleucopenia: { applied: true, date: '2024-08-05' },
            Calicivirus: { applied: false },
            Rinotraqueitis: { applied: false },
            Rabia: { applied: false },
            'Leucemia Felina': { applied: false },
        },
    },
    {
        id: '3',
        name: 'Rocky',
        species: 'dog',
        breed: 'Pastor Alemán',
        birthDate: '2022-05-20',
        ownerName: 'Carlos López',
        ownerContact: 'carlos@email.com',
        vaccines: {
            Parvovirus: { applied: true, date: '2022-07-01' },
            Moquillo: { applied: true, date: '2022-07-20' },
            Hepatitis: { applied: true, date: '2022-08-05' },
            Rabia: { applied: false, date: '2022-09-10' },
            Leptospirosis: { applied: true, date: '2022-08-20' },
        },
    },
]

