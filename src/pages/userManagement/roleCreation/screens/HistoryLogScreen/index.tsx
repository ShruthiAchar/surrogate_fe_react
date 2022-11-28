import React, { useEffect, useState } from 'react';
import {
  MenuItem,
  Checkbox,
  Typography,
  Box,
  Tab,
  Stack,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Icon,
  IconButton,
  Divider,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Menu,
  Select,
  TextField,
  OutlinedInput,
  ListItemText,
  Link,
  InputBase,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  historyLogAuthenticationInterface,
  historyLogDummyData,
  historyLogRoleCreationInterface,
  ruleCreationLogData,
} from './historyLog.const';
import './style.scss';
import GroupButton from '../../../../../components/commonComponent/GroupButton/GroupButton';
import { GridSearchIcon } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '../../../../../assets/icons/sortArrow.svg';
import { checkTagStatus } from '../../../../../utils/tagBasedIndicator/tagStatus';
import ListTable from '../../../../../components/commonComponent/commonListTable/commonListTable';

const tableHeaderData: historyLogAuthenticationInterface[] = [
  {
    id: 'ID',
    version: 'Version',
    initiator: 'Initiated By',
    approver: 'Approver',
    reviewer: 'Reviewer',
    currentStatus: 'Current Status',
    requestStatus: 'Request Status',
    more: 'More',
  },
];

export const GroupButtonData = [
  {
    title: 'Role Creation',
  },
  {
    title: 'Authorisation Level',
  },
];

export const HistoryLog = (props: any) => {
  const navigate = useNavigate();
  const [historyLogData, setHistoryLogData] =
    useState<historyLogRoleCreationInterface[]>(ruleCreationLogData);
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [ascending, setAscending] = useState<boolean>(true);
  const [sortingData, setSortingData] =
    useState<historyLogRoleCreationInterface[]>(ruleCreationLogData);
  const [selectedStatus, setSelectedStatus] = useState<String>('Role Creation');
  const [versionSorting, setVersionSorting] = useState<boolean>(true);

  const menuOpen = Boolean(anchorElement);

  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const column = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: '70px',
      render: (text: string) => {
        return <Stack>{text}</Stack>;
      },
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
      headerRender: (text: string) => {
        return (
          <Stack
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <>{text}</>
            <IconButton onClick={() => setVersionSorting(!versionSorting)}>
              <img src={UnfoldMoreIcon} alt="Sort Icon" />
            </IconButton>
          </Stack>
        );
      },
    },
    { title: 'Role Name', dataIndex: 'roleName', key: 'roleName' },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    { title: 'Request', dataIndex: 'request', key: 'request' },
    {
      title: 'Request Initiated',
      dataIndex: 'requestInitiated',
      key: 'requestInitiated',
    },
    { title: 'Reviewer', dataIndex: 'reviewer', key: 'reviewer' },
    { title: 'Approver', dataIndex: 'approver', key: 'approver' },
    {
      title: 'Request Status',
      dataIndex: 'requestStatus',
      key: 'requestStatus',
      render: (text: string) => {
        return (
          <Stack
            sx={{
              color: text ? checkTagStatus(text).color : '',
            }}
          >
            {text}
          </Stack>
        );
      },
    },
    {
      title: 'More',
      dataIndex: 'id',
      key: 'more',
      render: () => {
        return (
          <Stack onClick={handleClick}>
            <MoreVertIcon />
            <Menu
              id="more-menu"
              anchorEl={anchorElement}
              open={menuOpen}
              MenuListProps={{
                'aria-labelledby': 'more-button',
              }}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              // transformOrigin={{
              //   vertical: 'top',
              //   horizontal: 'right',
              // }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate('/userManagement/roleCreation/historyLogDetail');
                }}
                className="menu"
              >
                View
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  // navigate('/productManagement/cardCatalogue/singleupload/reviewCard');
                }}
                className="menu"
              >
                Edit
              </MenuItem>
            </Menu>
          </Stack>
        );
      },
    },
  ];

  const idFilterData = () => {
    const sort = historyLogData.sort((a: any, b: any) => {
      if (versionSorting) {
        return a.version < b.version ? -1 : 1;
      }
      return a.version > b.version ? -1 : 1;
    });
    setSortingData([...sort]);
  };

  useEffect(() => {
    idFilterData();
  }, [versionSorting]);

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <Stack>
      <Stack>
        {/* tableNavBar */}
        {historyLogData?.length > 0 ? (
          <Stack className="container">
            <Stack className="table-search-filters">
              <Box className="search-container">
                <Box className="search-box">
                  <InputBase placeholder="Search by Name, emp ID" />
                  <SearchIcon className="search-icon" />
                </Box>
              </Box>
              <Box className="groupButtonContainer">
                <GroupButton data={GroupButtonData} />
              </Box>
            </Stack>

            <Stack>
              <ListTable column={column} data={sortingData} />
            </Stack>
          </Stack>
        ) : (
          <Stack> </Stack>
        )}
      </Stack>
    </Stack>
  );
};