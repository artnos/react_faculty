import { ListItem, UnorderedList } from "@chakra-ui/react"
import  { useState } from "react"
import {Profile} from "../ProfileInterface.ts";

export const useSelectABC = () => {
    const [activeLetter, setActiveLetter] = useState("")

    //onClick={ ()=>setShowModal(false) }
    const abcProps = {
        activeLetter,
        setActiveLetter,

    }

    const reset = () => {
        setActiveLetter("")
    }

    return [abcProps, activeLetter, reset] as const
}


export const SelectorABC = ({ activeLetter, setActiveLetter, data = [], filterLetters = false }
: {activeLetter: string, setActiveLetter: (num:string)=>void, data: Array<Profile> , filterLetters: boolean}
) => {
    // prettier-ignore
    let letters = ["", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    if (filterLetters ) {
        const tempLetters = data.reduce(
                (acc: Array<string>, curr:Profile) => {
                    const formatLetter = curr.lastname.substring(0, 1).toLowerCase()
                    if (!acc.includes(formatLetter)) {
                        acc.push(formatLetter)
                    }
                    return acc
                },
                [""],
            )
            .sort()
        letters = [...tempLetters]
    }

    return (
        <div id="SelectorABC">
            <UnorderedList display={"flex"} flexWrap={"wrap"} listStyleType={"none"}>
                {letters.map((letter, i) => {
                    const active = activeLetter === letter

                    return (
                        <ListItem
                            key={`letter${i}`}
                            onClick={() => setActiveLetter(letter)}
                            backgroundColor={active ? "purple" : "transparent"}
                            color={active ? "white" : "purple"}
                            borderRadius={"5px"}
                            padding={"5px"}
                            cursor={"pointer"}
                            textTransform={"uppercase"}
                            fontWeight={"bold"}
                            _hover={{
                                backgroundColor: "purple",
                                color: "white",
                            }}
                        >
                            {letter === "" ? "all" : letter}
                        </ListItem>
                    )
                })}
            </UnorderedList>
        </div>
    )
}
