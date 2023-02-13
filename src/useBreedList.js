// custom hook for taking the breedlist based on the animal selected
import { useEffect, useState } from "react";

const localCache = {}; // object that will contain the status of api which to be load

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("Loaded");

    useEffect(() => {
        // condition when no animal is choosen from the form options
        if(!animal) {
            setBreedList([]); // nothing gets updated in the breedlist
        } else if(localCache[animal]) {
            // when animal is already loaded no need to re-load it again
            setBreedList(localCache[animal]); // change in the useState re-render
        } else {
            // when animal is not selected and localCache is not loaded 
            requestBreeds();    // call to requestBreeds function
        }

        // requestBreeds function logic 
        // load the breed based on the breedsList 
        async function requestBreeds() {
            setBreedList([]); // make the breedList empty
            setStatus("Loading"); // status of object is loading the apis for breedlist

            let result = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            let res = await result.json();
            localCache[animal] = res.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("Loaded");
        }
    }, [animal]);

    

    return [breedList, status];
}