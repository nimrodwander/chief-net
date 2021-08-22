import { createSlice } from "@reduxjs/toolkit";

const profiles = [
  {
    id: "543gh4",
    datak: 4,
    type: "penchief",
    name: "stav",
  },
  {
    id: "fewijfbv",
    type: "penchief",
    datak: 4,
    name: "gal",
  },
  {
    id: "rteh5y",
    type: "armament team Leader",
    datak: 4,
    name: "sapir",
  },
  {
    id: "g34545hywgqw",
    type: "armament team Leader",
    datak: 4,
    name: "sharon",
  },
  {
    id: "frku6hwshj453",
    type: "armament team Leader",
    datak: 4,
    name: "yeshareg",
  },
  {
    id: "h4hewq4",
    type: 'mechanics team leader',
    datak: 4,
    name: "ronen",
  },
  {
    id: "g345gqw",
    type: 'mechanics team leader',
    datak: 4,
    name: "max",
  },
  {
    id: "frku6453",
    type: 'mechanics team leader',
    datak: 4,
    name: "yoni",
  },
  {
    id: "43rqfwrqwa",
    datak: 4,
    type: "technician",
    name: "nimrod",
  },
  {
    id: "g32g3tgh",
    datak: 4,
    type: "technician",
    name: "aviad",
  },
  {
    id: "h365hweth",
    datak: 4,
    type: "technician",
    name: "meital",
  },
  {
    id: "4trgtjew",
    datak: 4,
    type: "technician",
    name: "liel",
  },
  {
    id: "t34tgjye",
    datak: 4,
    type: "technician",
    name: "shani",
  },
  {
    id: "hgwt46i5",
    datak: 4,
    type: "technician",
    name: "liora",
  },
  {
    id: "ghewqjr2",
    datak: 4,
    type: "technician",
    name: "nave",
  },
];

const profilesSlice = createSlice({
    name: 'profiles',
    initialState: profiles,
    reducers: {
        
    }
})

export const profilesActions = profilesSlice.actions 
export default profilesSlice



/*

const profiles1 = {
  datak4: {
    id: "datak4",
    people: {
      commanders: [
        {
          id: "543gh4",
          name: "stav",
        },
        {
          id: "fewijfbv",
          name: "gal",
        },
      ],
      teamLeaders: {
        armamentTeamLeaders: [
          {
            id: "rteh5y",
            name: "sapir",
          },
          {
            id: "g34545hywgqw",
            name: "sharon",
          },
          {
            id: "frku6hwshj453",
            name: "yeshareg",
          },
        ],

        mechanicsTeamLeaders: [
          {
            id: "h4hewq4",
            name: "ronen",
          },
          {
            id: "g345gqw",
            name: "max",
          },
          {
            id: "frku6453",
            name: "yoni",
          },
        ],
      },

      technicians: [
        {
          id: "43rqfwrqwa",
          type: "level A technician",
          name: "nimrod",
        },
        {
          id: "g32g3tgh",
          type: "level A technician",
          name: "aviad",
        },
        {
          id: "h365hweth",
          type: "level A technician",
          name: "meital",
        },
        {
          id: "4trgtjew",
          type: "level A technician",
          name: "liel",
        },
        {
          id: "t34tgjye",
          type: "level A technician",
          name: "shani",
        },
        {
          id: "hgwt46i5",
          type: "level A technician",
          name: "liora",
        },
        {
          id: "ghewqjr2",
          type: "level A technician",
          name: "nave",
        },
      ],
    }, //people of datak 4
  }, //datak 4
};//profiles

*/
