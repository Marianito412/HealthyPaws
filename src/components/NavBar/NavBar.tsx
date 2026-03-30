import { useEffect, useState } from 'react';
import {
  IconDog,
  IconCalendarEvent,
  IconVaccine,
  IconVaccineBottle,
  IconHome2,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Center, Stack, Tooltip, UnstyledButton, ThemeIcon } from '@mantine/core';
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
        href = {"/" + label}
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

export function NavbarMinimalColored({selectedLabel}: {selectedLabel: string}) {
  let test: number = mockdata.findIndex((element) => {console.log(selectedLabel, element.label); return element.label == selectedLabel});

  const [active, setActive] = useState(test);

  useEffect(() => {

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
        <ThemeIcon variant="white" size="xl">
          <IconDog size={40} stroke={2.5}></IconDog>
        </ThemeIcon>
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
