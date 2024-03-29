import React, { useState } from 'react';
import { Box, Stack, Grid, Button } from '@mui/material';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import HeaderWithInfo from '../../../../components/commonComponent/HeaderWithInfo';
import FirstActiveStepperIcon from '../../../../assets/icons/first_stepper_icon.svg';
import SecondActiveStepperIcon from '../../../../assets/icons/second_active_stepper.svg';
import SecondDisabledStepperIcon from '../../../../assets/icons/second_disabled_stepper.svg';
import CompletedStepperIcon from '../../../../assets/icons/completed_stepper_icon.svg';
import { FooterButton } from '../../../../components/commonComponent/FooterButton/FooterButton';
import { ScreenHeader } from '../../../../components/commonComponent/ScreenHeader/ScreenHeader';
import DetailsCard from '../../../../components/commonComponent/DetailsCard';
import {
  ReviewerApproverList,
  viewPermissionsList,
} from './../userCreation.const';
import { AccordianLayover } from '../../../../components/commonComponent/CustomAccordian/Accordian';
import ReviewerApproverTable from '../../../../components/commonComponent/ReviewerApproverTable';
import { ReactComponent as EditRole } from '../../../../assets/icons/edit_role.svg';

function ViewUser() {
  const [isPermission, setIsPermission] = useState(false);
  const [isUserCreated, setIsUserCreated] = useState(false);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleSubmitClick = () => {
    isPermission ? setIsUserCreated(true) : setIsPermission(true);
  };

  const personalDetails = {
    title: 'Personal Details',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Employee Id',
        value: '1234567890',
      },
      {
        label: 'Employee Name',
        value: 'Ganesh.M',
      },
      {
        label: 'Email Id',
        value: '987654321',
      },
      {
        label: 'Mobile Number',
        value: '10 May, 1990',
      },
    ],
  };

  const employementDetails = {
    title: 'Employement Details',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Date Of Joining',
        value: '10 Aug, 2022',
      },
      {
        label: 'Designation',
        value: 'Head',
      },
      {
        label: 'Reporting Head',
        value: 'Jack',
      },
      {
        label: 'Optional Reporting Head (Optional)',
        value: 'Venket',
      },
    ],
  };

  const channelAccessibleDetails = {
    title: 'Channel Accessible Details',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Select Channel',
        value: 'Bank, DSA, Fintech Partner',
      },
    ],
  };

  const locationDetails = {
    title: 'State, Zonal, District, Branch',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'State',
        value: 'Tamil Nadu',
      },
      {
        label: 'Zone',
        value: 'Tamil Nadu',
      },
      {
        label: 'District',
        value: 'Tamil Nadu',
      },
      {
        label: 'Branch',
        value: 'Bank, DSA, Fintech Partner',
      },
    ],
  };

  const roleDetails = {
    title: 'Role Details',
    icon: true,
    note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
    details: [
      {
        label: 'Role Access Type',
        value: 'Initiator',
      },
    ],
  };

  return (
    <Stack className="create-user-main-container">
      <Box className="create-user-container">
        <Box style={{ display: 'flex' }}>
          <ScreenHeader
            title="View User details - Ganesh (#12345)"
            info="From here you can create access presets to assign with users in Users Creation."
            showBackButton={true}
          />
          <Box style={{ marginLeft: 'auto' }}>
            <Button
              sx={{ textTransform: 'capitalize' }}
              color="secondary"
              startIcon={<EditRole />}
              aria-haspopup="true"
              onClick={() => navigate('/userManagement/userCreation/editUser')}
              id="basic-button"
            >
              Edit User Details
            </Button>
          </Box>
        </Box>
        <Stack className="underline"></Stack>
        <Stack className="stepper-container">
          <Stack className="steppers">
            <img
              src={isPermission ? CompletedStepperIcon : FirstActiveStepperIcon}
              alt=""
              className="stepper-icons"
            />
            <Stack
              className={
                isPermission ? 'enabled-stepper-line' : 'disabled-stepper-line'
              }
            ></Stack>
            <img
              src={
                isPermission
                  ? SecondActiveStepperIcon
                  : SecondDisabledStepperIcon
              }
              alt=""
              className="stepper-icons"
            />
          </Stack>

          <Stack className="steppers-label-container">
            <Stack className="stepper-label enabled">Personal Details</Stack>
            <Stack
              className={
                isPermission
                  ? 'stepper-label enabled'
                  : 'stepper-label disabled'
              }
            >
              Permissions
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {isPermission ? (
        <>
          <Stack className="container">
            <HeaderWithInfo
              header="Permission allocation"
              isInfoEnabled={true}
              info="From here, you can add the user’s personal details"
              isDownloadEnabled={false}
            />
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={3}>
                <Stack className="each-info">
                  <Stack className="info-label">Copy Role Access from</Stack>
                  <Stack className="info-value">Role Presets</Stack>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack className="each-info">
                  <Stack className="info-label">User Role</Stack>
                  <Stack className="info-value">Role 1 (Edited)</Stack>
                </Stack>
              </Grid>
            </Grid>
            <Stack className="underline"></Stack>
            <AccordianLayover data={viewPermissionsList} isViewPage={true} />
          </Stack>

          <Stack className="container">
            <HeaderWithInfo
              header="Reviewer & Approver allocation"
              isInfoEnabled={true}
              info="From here, you can add the user’s personal details"
              isDownloadEnabled={false}
            />
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={3}>
                <Stack className="each-info">
                  <Stack className="info-label">
                    Reviewer & Approver allocation
                  </Stack>
                  <Stack className="info-value">Yes, I will assign</Stack>
                </Stack>
              </Grid>
            </Grid>
            <Stack className="underline" style={{ margin: '0px' }}></Stack>

            <Stack>
              <ReviewerApproverTable data={ReviewerApproverList} mode="view" />
            </Stack>
          </Stack>
        </>
      ) : (
        <Stack>
          <DetailsCard data={personalDetails} gridColumn={3} />
          <DetailsCard data={employementDetails} gridColumn={3} />
          <DetailsCard data={channelAccessibleDetails} gridColumn={3} />
          <DetailsCard data={locationDetails} gridColumn={3} />
          <DetailsCard data={roleDetails} gridColumn={3} />
        </Stack>
      )}
      {isPermission ? (
        <FooterButton
          cancel="Close"
          handleCancelClick={goBack}
          // handleSaveasDraftClick={handleSaveasDraftClick}
        />
      ) : (
        <FooterButton
          cancel="Close"
          submit="Next"
          handleSubmitClick={handleSubmitClick}
          handleCancelClick={goBack}
          // handleSaveasDraftClick={handleSaveasDraftClick}
        />
      )}
    </Stack>
  );
}

export default ViewUser;
