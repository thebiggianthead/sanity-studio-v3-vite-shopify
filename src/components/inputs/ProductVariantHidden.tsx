import {WarningOutlineIcon} from '@sanity/icons'
import {StringInputProps, useFormValue} from 'sanity'
import {Box, Card, Flex, Stack, Text} from '@sanity/ui'
import {productUrl} from '../../utils/shopifyUrls'

type Store = {
  id: number
  status: string
  isDeleted: boolean
}

export default function ProductVariantHiddenInput(props: StringInputProps) {
  return (
    <Card padding={4} radius={2} shadow={1} tone="critical">
      <Flex align="flex-start">
        <Text size={2}>
          <WarningOutlineIcon />
        </Text>
        <Box flex={1} marginLeft={3}>
          <Box>
            <Text size={2} weight="semibold">
              This variant is hidden
            </Text>
          </Box>
          <Stack marginTop={4} space={2}>
            <Text size={1}>It has been deleted from Shopify</Text>
          </Stack>
        </Box>
      </Flex>
    </Card>
  )
}
