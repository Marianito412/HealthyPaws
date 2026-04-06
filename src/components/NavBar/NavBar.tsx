import {useEffect, useState} from 'react';
import {IconDog, IconHome2, IconLogout, IconSwitchHorizontal} from '@tabler/icons-react';
import {Center, Stack, Tooltip, UnstyledButton, ThemeIcon} from '@mantine/core';
import {type Button} from '../../mockdata/MockData.tsx'
import classes from './Navbar.module.css';

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

function NavbarLink({icon: Icon, label, active, onClick}: NavbarLinkProps) {
    return (
        <Tooltip label={label} position="right" transitionProps={{duration: 0}}>
            <UnstyledButton
                onClick={onClick}
                component='a'
                href={"/" + label}
                className={classes.link}
                data-active={active || undefined}
                aria-label={label}
            >
                <Icon size={20} stroke={1.5}/>
            </UnstyledButton>
        </Tooltip>
    );
}

export function NavbarMinimalColored({selectedLabel, labels}: { selectedLabel: string, labels: Button[]}) {
    let test: number = labels.findIndex((element: { label: string; }) => {
        console.log(selectedLabel, element.label);
        return element.label == selectedLabel
    });

    const [active, setActive] = useState(test);

    useEffect(() => {

    }, [active]);

    const links = labels.map((element, index) => (
    <NavbarLink
        {...element}
      key={element.label}
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
