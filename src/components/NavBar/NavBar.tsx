import { useEffect, useState } from 'react';
import {
  IconCalendarEvent,
  IconVaccine,
  IconVaccineBottle,
  IconHome2,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Center, Stack, Tooltip, UnstyledButton, Text } from '@mantine/core';
import classes from './Navbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        component='a'
        href='/'
        className={classes.link}
        data-active={active || undefined}
        aria-label={label}
      >
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconVaccineBottle, label: 'Medicamentos' },
  { icon: IconVaccine, label: 'Vacunas' },
  { icon: IconCalendarEvent, label: 'Citas' },
];

export function NavbarMinimalColored() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    console.log(active);
  }, [active]);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <Text size="md">Default text</Text>
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}
