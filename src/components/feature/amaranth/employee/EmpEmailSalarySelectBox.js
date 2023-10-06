import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { EMAIL_LIST } from '../../../../constants/List';

const EmpEmailSalarySelectBox = ({
  width,
  onClickEvent,
  emailSalaryData,
  setEmailSalaryData,
  setChangeFormData,
}) => {
  const handleChange = e => {
    setEmailSalaryData(e.target.value);
    onClickEvent(e.target.value);
    setChangeFormData(changeFormData => ({
      ...changeFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: width }} size="small">
      <Select
        id="demo-select-small"
        name="salary_MAIL_CP"
        value={emailSalaryData}
        onChange={handleChange}
        displayEmpty
        sx={{
          height: '26.3px',
          borderRadius: '0',
          fontSize: '0.8rem',
        }}
        MenuProps={{
          PaperProps: {
            style: {
              width: '230px',
              maxHeight: 150, // 원하는 최대 높이 값으로 변경
            },
          },
        }}
      >
        <MenuItem
          value=""
          style={{
            fontSize: '0.8rem',
            fontWeight: 'bold',
            borderBottom: '1px solid #CCC',
          }}
        >
          <em>직접입력</em>
        </MenuItem>
        {EMAIL_LIST.map(email => (
          <MenuItem
            value={email}
            key={email}
            style={{
              fontSize: '0.8rem',
              fontWeight: 'bold',
              borderBottom: '1px solid #CCC',
            }}
          >
            {email}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default EmpEmailSalarySelectBox;
