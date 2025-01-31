import { QueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCanins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const { mutate: EditCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin sucessfully edited");
      QueryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { EditCabin, isEditing };
}
