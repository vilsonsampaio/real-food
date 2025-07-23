// import { StatusBar } from 'expo-status-bar';
import { Modal } from "react-native";
import { Text } from "../Text";
import { ConfirmButton, Container } from "./styles";
import { CheckCircle } from "../Icons/CheckCircle";

interface OrderConfirmedModalProps {
  visible: boolean;
  onConfirmed: () => void;
}

export function ConfirmationModal({
  visible,
  onConfirmed,
}: OrderConfirmedModalProps) {
  return (
    <Modal visible={visible} animationType="fade">
      <Container>
        <CheckCircle />

        <Text
          size={20}
          weight="600"
          color="#fff"
          style={{ marginTop: 12, marginBottom: 4 }}
        >
          Pedido confirmado
        </Text>
        <Text color="#fff" opacity={0.9}>
          Em breve estará em sua residência :)
        </Text>
        <ConfirmButton onPress={onConfirmed}>
          <Text weight="600" color="#32b768" align="center">
            Tudo certo!
          </Text>
        </ConfirmButton>
      </Container>
    </Modal>
  );
}
