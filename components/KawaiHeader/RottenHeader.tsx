import React from 'react'
import {Header, Transition, Confirm} from 'semantic-ui-react'

import {IDie} from '@components/SVGIcons'

const RottenHeader = () => {
    return (
        <Header size="huge" as="h1">
            Platzi
            <IDie size="58px" />
            Avo
        </Header>
    )
}

export default RottenHeader
