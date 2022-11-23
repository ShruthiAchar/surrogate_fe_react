import { Box, Paper, Stack, Typography } from '@mui/material';
import Card from '../../components/commonComponent/card/Card';
import credit_rule from '../../assets/icons/credit_rule.svg';
import card_for_approval from '../../assets/icons/card_for_approval.svg';
import dsa_onboarding from '../../assets/icons/dsa_onboarding.svg';
import user_onboarding from '../../assets/icons/user_onboarding.svg';
import sales_report from '../../assets/icons/sales_report.svg';
import customer_report from '../../assets/icons/customer_report.svg';
import performance_report from '../../assets/icons/performance_report.svg';
import lms from '../../assets/icons/lms.svg';
import frequentActivity from '../../assets/images/frequentActivity.svg';
import '../home/Home.scss';
// import HistoryLogCustomModal from '../../components/commonComponent/customModal/HistoryLogCustomModal';
// import HistoryModal from '../../components/commonComponent/customModal/HistoryLogModal';
// import PauseModal from '../../components/commonComponent/customModal/PauseModal';
// import PauseModalSucces from '../../components/commonComponent/customModal/PauseModalSuccess';
// import RejectionModal from '../../components/commonComponent/customModal/RejectionModal';
// import ResumeModal from '../../components/commonComponent/customModal/ResumeModal';
// import ResumeModalSuccess from '../../components/commonComponent/customModal/ResumeModalSuccess';
// import SchedulePause from '../../components/commonComponent/customModal/SchedulePause';
// import SchedulePauseSuccess from '../../components/commonComponent/customModal/SchedulePauseSuccess';
// import SurrogateSelection from '../../components/commonComponent/customModal/SurrogateSelection';
// import PageLayout from '../../components/layout/pageLayout/pageLayout';
import { useState } from 'react';
import AccessLibraryModal from '../../components/commonComponent/customModal/AccessLibraryModal';
import ChangePasswordProfileModal from '../../components/commonComponent/customModal/ChangePasswordProfileModal';
import ChangePasswordOTP from '../../components/commonComponent/customModal/ChangePasswordOTP';
import CreateNewPassword from '../../components/commonComponent/customModal/CreateNewPassword';
import BulkUploadDiscard from '../../components/commonComponent/customModal/USER-MNGMT/BulkUploadDiscard';
import RequestForDeactivation from '../../components/commonComponent/customModal/USER-MNGMT/RequestForDeactivation';
import RequestForActivation from '../../components/commonComponent/customModal/USER-MNGMT/RequestForActivation';
import SuccessForDeactivation from '../../components/commonComponent/customModal/USER-MNGMT/SuccessForDeactivation';
import SuccessForActivate from '../../components/commonComponent/customModal/USER-MNGMT/SuccessForActivate';
import SuccessForUserCreated from '../../components/commonComponent/customModal/USER-MNGMT/SuccessForUserCreated';
// import SurrogateSelection from "../../components/commonComponent/CustomModal/SurrogateSelection";
// import PauseModalSucces from "../../components/commonComponent/customModal/PauseModalSuccess";
// import RejectionModal from "../../components/commonComponent/customModal/RejectionModal";
// import ResumeModal from "../../components/commonComponent/customModal/ResumeModal";
// import ResumeModalSuccess from "../../components/commonComponent/customModal/ResumeModalSuccess";
// import SchedulePause from "../../components/commonComponent/customModal/SchedulePause";
// import SchedulePauseSuccess from "../../components/commonComponent/customModal/SchedulePauseSuccess";
// import SurrogateSelection from "../../components/commonComponent/customModal/SurrogateSelection";
export default function Home() {
  const pendingActionsData = {
    title: 'Pending Actions',
    key: 'pendingItems',
    clipText: 'Pending',
    clipNo: 2,
    data: [
      {
        image: credit_rule,
        text_one: 'New Credit Rule Review',
        text_two: 'Received: 10/June/2022 19:30:12',
        text_three: '',
      },
      {
        image: card_for_approval,
        text_one: 'New Card For Approval',
        text_two: 'Received: 10/June/2022 19:30:12',
        text_three: '',
      },
    ],
  };
  const savedItemsData = {
    title: 'Saved Items',
    key: 'savedItems',
    clipText: 'Saved',
    clipNo: 2,
    data: [
      {
        image: dsa_onboarding,
        text_one: 'DSA Onboarding',
        text_two: 'Saved On: 10/June/2022 19:30:12',
        text_three: 'ID No. 12345678',
      },
      {
        image: user_onboarding,
        text_one: 'User Onboarding',
        text_two: 'Saved On: 10/June/2022 19:30:12',
        text_three: 'ID No. 12345678',
      },
    ],
  };
  const frequentActivitiesData = {
    title: 'Frequent Activities',
    key: 'frequentActivities',
    clipText: '',
    clipNo: '',
    mainImage: frequentActivity,
    data: [
      {
        image: sales_report,
        mainContent: 'Sales Report',
      },
      {
        image: customer_report,
        mainContent: 'Customer Report',
      },
      {
        image: performance_report,
        mainContent: 'Performance Report',
      },
      {
        image: lms,
        mainContent: 'LMS',
      },
    ],
  };
  const [pendingAction, setPendingAction] = useState(pendingActionsData);
  const [savedItems, setSavedItems] = useState(savedItemsData);
  const [frequentActivities, setFrequentActivities] = useState(
    frequentActivitiesData
  );
  return (
    <Box className="main-container">
      <Typography color="secondary" variant="h5">
        Welcome Parithi!
      </Typography>
      <Box className="home-container">
        {/* <BulkUploadDiscard />
        <RequestForDeactivation />
        <RequestForActivation />
        <SuccessForDeactivation />
        <SuccessForActivate />
        <SuccessForUserCreated /> */}

        {/* <AccessLibraryModal />
        <ChangePasswordProfileModal />
        <ChangePasswordOTP />
        <CreateNewPassword /> */}
        <Card content={pendingActionsData} />
        <Card content={savedItemsData} />
        <Card content={frequentActivitiesData} />

        {/* Modals*/}
        {/* <PauseModal />
      <PauseModalSucces />
      <SchedulePause />
      <SchedulePauseSuccess />
      <ResumeModal />
      <ResumeModalSuccess />
      <SurrogateSelection />
      <RejectionModal />
      <HistoryModal/> */}
        {/* <HistoryLogCustomModal /> */}
      </Box>
    </Box>
  );
}
