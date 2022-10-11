import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';

import Container from '@material-ui/core/Container';

import AcUnitIcon from '@material-ui/icons/AcUnit';

import { makeStyles } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControlLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

//Form Control => section in  form
//Form label is a lable for the form control

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';

import '../index.css'

const useStyles = makeStyles({
  //class btn
  btn: {
    fontSize: 16,
    backgroundColor: 'violet',

    //on hover
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  field: {
    marginTop: 10,//10px
    marginBottom: 20,
    display: "block"
  }
})

export default function Create() {
  const location = useLocation();
  const navigate = useNavigate();

  const classes = useStyles()

  const [password, setPassowrd] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const [category, setCategory] = useState('todos')

  const submitform = (e) => {
    //prevent 
    e.preventDefault()
    if (password)//!=''//not blanck
    {
      console.log("Submitted")
      setPasswordError(false)
    }
    else
      setPasswordError(true)

    navigate("./hhhhhhhhh")
    console.log(location)
  }

  return (
    // Container that applies margin and padding
    <Container>
      Create page
      {/* 1.Typography */}
      <Typography variant="h1" component="h2" gutterBottom>
        Hello {/*It is h2 compnant taking h1 styling */}
      </Typography>

      {/* 2.Button */}
      <Button variant="contained" color="primary">Primary</Button>{/* contained */}
      <Button variant="outlined">Default</Button>{/* outlined */}
      <Button>Default</Button> {/*Text */}

      <ButtonGroup>
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
      </ButtonGroup>

      <Button
        onClick={() => console.log("Button Clicked")}
        type="submit"
        variant='contained'
        color='secondary'
      >
        Submit
      </Button>

      {/* 3.Icons */}
      <AcUnitIcon />

      {/* Icon inside button */}
      <Button
        variant='contained'
        color='secondary'
        startIcon={<AcUnitIcon color="primary" />}
        endIcon={<AcUnitIcon color="primary" />}
      >
        Submit
      </Button>

      {/* 4.makeStyle hook */}
      <Button className={classes.btn}>
        Submit
      </Button>


      {/* 5.Custom Themes refer to App.js */}
      {/* https://v4.mui.com/customization/default-theme/#default-theme */}


      <form noValidate autoComplete="off" onSubmit={submitform}>
        {/*no validate => browesr son't use his balidation messages  */}

        {/* 6.Text fields */}
        <TextField label="Placehoder1" /> {/* standard */}
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        {/*Text Field props*/}
        {/* required, disabled, type, etc. as well as a helperText which is used to give context about a field’s input, such as how the input will be used. */}
        <TextField required defaultValue="default value" label="label" color="secondary" />
        {/* Note : required here won't prevenet form from being submitted because we have added no validate to the form*/}

        <TextField
          disabled
          label="Disabled"
          defaultValue="Hello World"
          fullWidth
        />

        <TextField
          onChange={(e) => {
            console.log("password typed is " + e.target.value)
            setPassowrd(e.target.value)
          }}
          label="Password"
          type="password"
          error={passwordError}
        />
        <TextField label="multilined"
          multiline
          minRows={4}
        />

        {/* we can add class for this component as follows */}
        <TextField className={classes.field} label="styled" />

        <Button type="submit">submit</Button>

        {/* 7.RadioButtons */}

        <RadioGroup>
          <Radio value="hello"></Radio>
          <Radio value="Goodbye"></Radio>
        </RadioGroup>

        {/* better to use form controlled label to add label to the radio instaed of using <Radio> */}
        {/* value in RadioGroup => default value */}
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel control={<Radio />} label="Money" value="Money" />
          <FormControlLabel control={<Radio />} label="todos" value="todos" />
          <FormControlLabel control={<Radio />} label="reminders" value="reminders" />
        </RadioGroup>

        <FormControl>
          <FormLabel>adding label to the radio button</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel control={<Radio />} label="Money" value="Money" />
            <FormControlLabel control={<Radio />} label="todos" value="todos" />
            <FormControlLabel control={<Radio />} label="reminders" value="reminders" />
          </RadioGroup>
        </FormControl>
      </form>

      <button onClick={() => navigate(-1)}>Go Back</button>

      {/* 8.Grid */}
      <Grid container>
        <Grid item className='class1' xs={12} s={6} md={3}>1</Grid>
        <Grid item className='class1' xs={12} s={6} md={3}>2</Grid>
        <Grid item className='class1' xs={12} s={6} md={3}>3</Grid>
        <Grid item className='class1' xs={12} s={6} md={3}>4</Grid>
      </Grid>

      {/* 9.Card Component */}

      {/* 10.permenent draw ==> bars appearing */}

      {/* 11.Lists */}
      {/* he made side bar with links to the pages and appear when hover shaded */}

      {/* 12.App Bars */}

      {/* 13.Avatar */}


    </Container>
  )
}
