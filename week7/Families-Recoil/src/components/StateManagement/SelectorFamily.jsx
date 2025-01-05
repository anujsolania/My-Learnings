import { selectorFamily } from "recoil";


export const AtomSelectorFamily = selectorFamily({
    id: "AtomSelectorFamily",
    get: (id) => async ({ get }) => {
        const baseUrl = get(apiBaseUrlState); // Access the base URL from the atom
        try {
          const response = await fetch(`${baseUrl}/${id}`);
          if (!response.ok) {
            throw new Error(`Error fetching todo with id ${id}`);
          }
          const data = await response.json();
          return data; // Return the fetched data
        } catch (error) {
          console.error("Error fetching data:", error);
          throw error;
        }
      }
    })