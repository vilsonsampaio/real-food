import { Bell } from "../Icons/Bell";
import { Text } from "../Text";
import { Avatar, Container, NotificationButton, Texts } from "./styles";

export function Header() {
  return (
    <Container>
      <Avatar
        source={{
          uri: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        }}
      />

      <Texts>
        <Text size={10} color="#DAF2E4">
          Olá,
        </Text>
        <Text weight={600} size={14} color="#fff">
          João!
        </Text>
      </Texts>

      <NotificationButton>
        <Bell />
      </NotificationButton>
    </Container>
  );
}
