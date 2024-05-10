import {ReactElement} from "react"
import { GridItem, Heading, Text } from "@chakra-ui/react"
import {Profile as ProfileType } from "./ProfileInterface.ts";

export default function Profile({ detail } : { detail: ProfileType}): ReactElement {
    const { address,  fullname, institution } = detail
    return (
        <GridItem>
            <Heading
                as={"h5"}
                color={"#511c74"}
                fontWeight={300}
                fontSize={"1.5rem"}
                dangerouslySetInnerHTML={{ __html: fullname }}

            />
            <Text dangerouslySetInnerHTML={{ __html: institution }} />
            <Text>
                <em>
                    <span className="address" dangerouslySetInnerHTML={{ __html: address }} />
                </em>
            </Text>
        </GridItem>
    )
}
