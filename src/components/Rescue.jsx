
import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import injuredDog from '../assets/rescue.webp'
import helpDog from '../assets/help-rescue-background-img.jpeg'
import BoraBora from '../assets/5-img.webp';
import BoraBora2 from '../assets/4-img.jpeg';
import Maldives6 from '../assets/9-img.webp';
import Maldives5 from '../assets/5-img.webp';
import Maldives4 from '../assets/4-img.jpeg';
import Maldives3 from '../assets/8-img.jpeg';
import Maldives2 from '../assets/10-img.jpeg';
import Maldives1 from '../assets/1-img.avif';
import KeyWest from '../assets/help-rescue-background-img.jpeg';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel
} from '@mui/material';
 
const initialFormData = {
  name: '',
  type: '',
  injuries: '',
  injuryDetail: '',
  breed: '',
  address: '',
  city: '',
  country: '',
  photo: '',
};

const petTypes = [
  'dog',
  'cat',
  'bird',
  'cow',
  'rabbit',
  'horse',
  'goat',
  'pig',
  'other',
];

function Rescue() {

  const [formData, setFormData] = useState(initialFormData);

  return (
    <div>
      <Box width={{lg:'80%',md:'100%',xs:'100%'}} mx={'auto'}>
        <Box  className='rescue-home'   sx={{ p: 2.9 ,backgroundSize:'cover' , backgroundRepeat:'no-repeat',backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundImage:`url(${helpDog})`}}>
          <Stack justifyContent='end' alignItems='center'>
              <Box minHeight='100vh' display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Typography fontSize={{md:58,sm:48,xs:42}} fontWeight={700} color='#ffff' lineHeight={1.5} letterSpacing={1}> They Need Your Help, </Typography>
                <Typography fontSize={{md:58,sm:48,xs:38}} fontWeight={700} color='#ffff' marginTop={2} lineHeight={1.3} letterSpacing={1}> Love & Support </Typography>
                <Button className='rescue-btn' type="submit" justifyContent='center' variant="contained"  sx={{color:'white',backgroundColor:'#ff6d00',fontSize:'24px',marginTop:'20px'}}>
                  RESCUE THEM 
                </Button>
              </Box>  
          </Stack>
        </Box>
        <div className='rescue-content bg-black'>
        <h1 className='rescue-content-heading'>Their lives matter. Rescue animals</h1>
        <p className='rescue-content-para'>Animals suffer everyday. Whether it is dehydration, starvation, or lack of attention, these are all leading factors into animal abuse. Animal abuse occurs all around the world. Typically it is something people will turn a blind eye towards because it is not a human life being threatened; it is simply ‘just an animal life.’ Animals are crucial for our universe, not to mention they are capable of being lifelong companions.</p>
          <div className='max-w-[1240px] mx-auto px-4 py-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-black'>
            <img src={Maldives1} alt="" srcset="" />
            <img src={Maldives2} alt="" srcset="" />
            <img src={Maldives3} alt="" srcset="" />
            <img src={Maldives4} alt="" srcset="" />
            <img src={Maldives5} alt="" srcset="" />
            <img src={Maldives6} alt="" srcset="" />
          </div>
        </div>
        <div>
        <div>
          <div className="flex items-center justify-center ">
            <div className="bg-#bfbfbf">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold">
                      - FAQ -

                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">
                    Saving one animal won’t change the world, but it will change the world for that one animal.

                    </p>
                    <div className="space-y-4">
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                            What types of animals do you rescue?

                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            We rescue a variety of animals, including dogs, cats, rabbits, and sometimes even small animals like guinea pigs or birds.

                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                            Are the animals up-to-date on vaccinations and medical care?

                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            Yes, all our animals receive necessary vaccinations and medical care before they are available for adoption.

                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                            Can I surrender my pet to your rescue organization?

                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            We do accept surrendered pets if space is available. Please contact us to discuss the situation and check for availability.

                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        <Box   sx={{  p: 2.9 ,backgroundSize:'cover',  boxSizing: 'content-box', backgroundRepeat:'no-repeat', backgroundImage:`url(${injuredDog})`}}>
        <Stack justifyContent='end' alignItems='center'>
            <Box>
              <Typography fontSize={{md:52,sm:42,xs:32}} fontWeight={700} color='#ffff' lineHeight={1.2} letterSpacing={1}>What to do when you find an injured stray animal !!!</Typography>
            </Box>  
        </Stack>
        <Box width='90%' mx='auto' my={4} ><hr style={{height:'2px',border:'none', backgroundColor:'#e0e0e0'}}/> </Box>
        <Box width={{md:'70%',xs:'90%'}} mx='auto' mb={4}>
          <Box sx={{borderLeft:'3px solid #ff6d00',borderRight:'3px solid #ff6d00'}} mb={3}>
            <Typography color='#000000' fontSize={{sm:44,xs:32}} fontWeight={700} ml={2}>
                Rescue Form
            </Typography>
          </Box>
          <form style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <TextField label="Name" name="name" required fullWidth style={{ marginBottom: '15px' }} />
              <FormControl fullWidth style={{ marginBottom: '15px' }} required>
                <InputLabel>Type</InputLabel>
                <Select
                  label="Type"
                  name="type"
                  value={formData.type}
                  required
                >
                  {petTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {formData.type === 'other' && (
                <TextField label="Type (Other)" name="type" required fullWidth style={{ marginBottom: '15px' }} />
              )}
            <TextField label="Breed" name="breed" required fullWidth style={{ marginBottom: '15px' }} />
            <FormControl style={{ marginBottom: '15px' }}>
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" color='#ff6d00'/>
                <FormControlLabel value="male" control={<Radio />} label="Male" color='#ff6d00'/>
                <FormControlLabel value="other" control={<Radio />} label="Other" color='#ff6d00'/>
              </RadioGroup>
            </FormControl>
            <TextField label="Injuries" name="injuries"  required fullWidth style={{ marginBottom: '15px' ,color:'#ff6d00'}} />
            <TextField label="Injury Detail" name='injuryDetail' placeholder="Describe the injuries in detail" required multiline rows={5} maxRows={10} style={{ marginBottom: '15px' }} />
            <TextField label="Address" name="address" required fullWidth style={{ marginBottom: '15px' }} />
            <TextField label="City" name="city" required fullWidth style={{ marginBottom: '15px' }} />
            <TextField label="Country" name="country" required fullWidth style={{ marginBottom: '15px' }} />
            <TextField label="Photo URL" name="photo" required fullWidth style={{ marginBottom: '15px' }} />
            <Button type="submit" justifyContent='center' size='large' variant="contained"  sx={{color:'white',backgroundColor:'#ff6d00'}}>
              Submit
            </Button>
          </form>
        </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Rescue;
