import { createSlice } from "@reduxjs/toolkit";


const Omborchi=createSlice({
    name:'ombor',
    initialState:{
        data:[
                    {"name": "Australia", "selected": false},
                    {"name": "Brazil", "selected": false},
                    {"name": "Canada", "selected": false},
                    {"name": "Denmark", "selected": false},
                    {"name": "Egypt", "selected": false},
                    {"name": "France", "selected": false},
                    {"name": "Germany", "selected": false},
                    {"name": "Hungary", "selected": false},
                    {"name": "India", "selected": false},
                    {"name": "Japan", "selected": false},
                    {"name": "Kenya", "selected": false},
                    {"name": "Luxembourg", "selected": false},
                    {"name": "Mexico", "selected": false},
                    {"name": "Netherlands", "selected": false},
                    {"name": "Oman", "selected": false},
                    {"name": "Peru", "selected": false},
                    {"name": "Qatar", "selected": false},
                    {"name": "Russia", "selected": false},
                    {"name": "Spain", "selected": false},
                    {"name": "Thailand", "selected": false},
                    {"name": "United Kingdom", "selected": false},
                    {"name": "Vietnam", "selected": false},
                    {"name": "Italy", "selected": false},
                    {"name": "United States", "selected": false},
                    {"name": "China", "selected": false},
                    {"name": "South Africa", "selected": false},
                    {"name": "New Zealand", "selected": false},
                    {"name": "Argentina", "selected": false},
                    {"name": "Belgium", "selected": false},
                    {"name": "Chile", "selected": false}
                ],

        rendomRaqam:Math.floor(Math.random()*29),
        harflar:['a'],
        harf:['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ],
        tanlangan:['a'],
        xatolarsoni:8,
        xato: true,
        aler: false,
    },


    reducers:{
        bosildi:(state, {payload})=>{
            state.xato=true
            state.tanlangan=state.tanlangan.map(k=>{
                if (k.belgi.toLowerCase()==payload.toLowerCase()) {
                    state.xato=false
                }
                 k= k.belgi.toLowerCase()==payload.toLowerCase() ? {...k, aniqlangan:true} : k;
                return k
            })
            state.harflar=state.harflar.map(k=>{
                
                k= k.belgi.toLowerCase()==payload.toLowerCase() ? {...k, aniqlangan:true} : k;
               return k
           });
           if (state.xato) {
            state.xatolarsoni=+state.xatolarsoni-1;
           };
        },
        aler: (state)=>{
            state.aler= !state.aler
        },
        tanlandi:(state)=>{
                state.tanlangan=state.data[state.rendomRaqam].name.split('').map(m=>{
                    return({
                        belgi:m,
                        aniqlangan:false
                    })
                }),
                state.harflar=state.harf.map(n=>{
                    return({
                        belgi:n,
                        aniqlangan:false
                    })
                }),
                state.xatolarsoni=8
        
        }
    }

})

export default Omborchi;