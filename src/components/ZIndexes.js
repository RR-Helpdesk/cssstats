import React from 'react'
import uniq from 'lodash.uniq'

import { Div, Text, SectionTitle } from './library'

export default ({ zIndexes = [] }) => (
  <Div py={[4, 5, 6]}>
    <SectionTitle
      title={`${uniq(zIndexes).length} Unique Z Indices`}
      description={`${zIndexes.length} total`}
    />

    {uniq(zIndexes).map((zIndex) => (
      <Text
        key={zIndex}
        mb={3}
        mr={3}
        inline={true}
        fontWeight="bold"
        children={zIndex}
      />
    ))}
  </Div>
)
