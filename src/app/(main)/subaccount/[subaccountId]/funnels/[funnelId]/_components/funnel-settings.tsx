import React from 'react'

import { Funnel, SubAccount } from '@prisma/client'
import { db } from '@/lib/db'


import FunnelForm from '@/components/forms/funnel-form'


interface FunnelSettingsProps {
  subaccountId: string
  defaultData: Funnel
}

const FunnelSettings: React.FC<FunnelSettingsProps> = async ({
  subaccountId,
  defaultData,
}) => {
  //CHALLENGE: go connect your stripe to sell products

  const subaccountDetails = await db.subAccount.findUnique({
    where: {
      id: subaccountId,
    },
  })



  return (
    <div className="flex gap-4 flex-col xl:!flex-row">
      

      <FunnelForm
        subAccountId={subaccountId}
        defaultData={defaultData}
      />
    </div>
  )
}

export default FunnelSettings