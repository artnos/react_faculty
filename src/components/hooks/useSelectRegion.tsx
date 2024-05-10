import  {useState} from "react"
import {Box, ListItem, UnorderedList} from "@chakra-ui/react"

export default function useSelectRegion() {
    const [activeRegion, setActiveRegion] = useState<string>("ALL")
    const regionArr = ["ALL", "International", "USA"]

    const SelectRegion = () => {
        return (
            <Box>
                <UnorderedList
                    display={"flex"}
                    listStyleType={"none"}
                    gap="20px"
                    ml={"0px"}
                    borderBottom={"solid 1px gray"}
                >
                    {regionArr.map(text => {
                        const active = activeRegion == text
                        return (
                            <ListItem
                                key={text}
                                color={"purple"}
                                padding={"5px 0px"}
                                fontWeight={active ? "bold" : 400}
                                cursor={"pointer"}
                                fontSize={"22px"}
                                onClick={() => setActiveRegion(text)}
                            >
                                {text}
                            </ListItem>
                        )
                    })}
                </UnorderedList>
            </Box>
        )
    }

    return [SelectRegion, activeRegion] as const
}
