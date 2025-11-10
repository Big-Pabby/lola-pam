import { ref } from "vue";

export const useDirectionsModal = () => {
  const isModalOpen = useState("directionsModal", () => false);

  const showModal = () => {
    isModalOpen.value = true;
  };

  const hideModal = () => {
    isModalOpen.value = false;
  };

  const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value;
  };

  return {
    isModalOpen,
    showModal,
    hideModal,
    toggleModal,
  };
};
