import React from 'react'
import InvitePartner from './InvitePartner'
import AwardsIssued from './AwardsIssued'
import LeaderBoard from './LeaderBoard'
import CommissionSection from './CommissionSection'
import InvitationBonus from './InvitationBonus'

const ToInvite = () => {
  return (
    <>
      <InvitePartner />
      <AwardsIssued />
      <InvitationBonus />
      <CommissionSection />
      <LeaderBoard />
    </>
  )
}

export default ToInvite
