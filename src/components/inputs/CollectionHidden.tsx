import React, {forwardRef, useEffect, useState} from 'react'
import {WarningOutlineIcon} from '@sanity/icons'
import {StringInputProps, useFormValue} from 'sanity'
import {Box, Card, Flex, Stack, Text} from '@sanity/ui'
import {getShopifyStoreId} from '../../utils/getShopifyStoreId'
import {collectionUrl} from '../../utils/shopifyUrls'

type Store = {
  id: number
  status: string
  isDeleted: boolean
}

export default function CollectionHiddenInput(props: StringInputProps) {
  const store: Store = useFormValue(['store']) as Store
  const [shopifyCollectionUrl, setShopifyCollectionUrl] = useState<string>()

  const isDeleted = store?.isDeleted

  useEffect(() => {
    getShopifyStoreId().then((storeId) => {
      if (storeId) {
        setShopifyCollectionUrl(collectionUrl(storeId, store?.id))
      }
    })
  }, [])

  return (
    <Card padding={4} radius={2} shadow={1} tone="critical">
      <Flex align="flex-start">
        <Text size={2}>
          <WarningOutlineIcon />
        </Text>
        <Box flex={1} marginLeft={3}>
          <Box>
            <Text size={2} weight="semibold">
              This collection is hidden
            </Text>
          </Box>
          <Stack marginTop={4} space={2}>
            <Text size={1}>It has been deleted from Shopify.</Text>
          </Stack>
          {!isDeleted && shopifyCollectionUrl && (
            <Box marginTop={4}>
              <Text size={1}>
                →{' '}
                <a href={shopifyCollectionUrl} target="_blank">
                  View this collection on Shopify
                </a>
              </Text>
            </Box>
          )}
        </Box>
      </Flex>
    </Card>
  )
}
