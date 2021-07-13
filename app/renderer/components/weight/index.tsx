import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@src/store/hooks'
import Box from '@material-ui/core/Box'
import { fetchRuleContent } from '@src/store/dimensionalWeightSlice'

function WeightRule() {
  const dispatch = useAppDispatch()
  const pageContent = useAppSelector((state) => state.dimensionalWeight.content)
  const loadStatus = useAppSelector((state) => state.dimensionalWeight.status)
  const error = useAppSelector((state) => state.dimensionalWeight.error)

  useEffect(() => {
    if (loadStatus === 'idle') {
      dispatch(fetchRuleContent())
    }
  }, [loadStatus, dispatch])

  let content

  if (loadStatus === 'loading') {
    content = <div className="loader">Loading...</div>
  } else if (loadStatus === 'succeeded') {
    content = <div dangerouslySetInnerHTML={{ __html: pageContent }} />
  } else if (loadStatus === 'failed') {
    content = <div>{error}</div>
  }
  return <Box m={2}>{content}</Box>
}
export default WeightRule
