/* Cincinnati pub quiz. Edit questions here: q = question, a = answer,
   note = host-only note, flag = host-only 'verify before the night',
   closest = closest answer wins. */
window.QUIZ = {
  id: "cincinnati",
  theme: "deco",
  title: "Cincinnati pub quiz",
  intro: "Ten rounds, one bonus round, and one joker each to double a round of your choice.",
  rounds: [
    { id:"origins", title:"Origins and early history", type:"standard", max:5,
      rule:"One point per correct answer. Accept sensible spellings.",
      note:"Warm-up. Accept spelling variations for Losantiville. Show a historical map for Fort Washington.",
      questions:[
        {q:"Founded in 1788, Cincinnati began life under which unusual name?", a:"Losantiville", note:"Accept any close spelling."},
        {q:"In 1790 the settlement was renamed after a society of Revolutionary War officers. What was the society called?", a:"The Society of the Cincinnati"},
        {q:"That society honoured a Roman farmer-general who left his plough to save Rome. Who was he?", a:"Cincinnatus"},
        {q:"Which fort, named after the first US president, was built in 1789 on the site of today's downtown?", a:"Fort Washington"},
        {q:"In the 19th century, Cincinnati earned which pork-fuelled nickname?", a:"Porkopolis"}
      ]},
    { id:"civilwar", title:"Civil War, abolition and the Underground Railroad", type:"standard", max:5,
      rule:"One point per correct answer.",
      note:"More serious tone. Accept \"Freedom Center\".",
      questions:[
        {q:"Cincinnati sat directly across the Ohio River from which slave state?", a:"Kentucky"},
        {q:"Which 1850 federal law required citizens to help return escaped enslaved people?", a:"The Fugitive Slave Act"},
        {q:"Harriet Beecher Stowe lived in Cincinnati before writing which 1852 novel?", a:"Uncle Tom's Cabin", flag:"Confirm Stowe's Cincinnati years (1832 to 1850) if you want to add a follow-up."},
        {q:"In February 1861, on his way to Washington, Lincoln spoke from the balcony of which Cincinnati hotel at Third and Vine?", a:"The Burnet House", note:"This replaces the old question that put the 1859 speech at the Burnet House (it was a different venue) and said Carew Tower stands on the site (it does not). Source: US National Park Service."},
        {q:"Which riverfront museum in Cincinnati tells the story of slavery and the Underground Railroad?", a:"National Underground Railroad Freedom Center", note:"Accept \"Freedom Center\"."}
      ]},
    { id:"transit", title:"Transit, subways and railways", type:"standard", max:5,
      rule:"One point per correct answer. On numbers, the closest team scores.",
      note:"Questions 1 and 4 are closest-wins. Accept the Roebling Bridge for question 3 in any form.",
      questions:[
        {q:"Construction of Cincinnati's never-finished subway stopped in which year?", a:"1927", closest:true, flag:"Check the year against a second source (Cincinnati Museum Center or the city) before the night."},
        {q:"Central Parkway follows the route of which former canal?", a:"The Miami and Erie Canal"},
        {q:"Which engineer, later famous for the Brooklyn Bridge, designed the 1866 suspension bridge between Cincinnati and Covington?", a:"John A. Roebling"},
        {q:"How long is the Cincinnati Connector streetcar loop, in miles?", a:"3.6 miles", closest:true, note:"Source: City of Cincinnati, \"3.6-mile loop\"."},
        {q:"In which year did streetcar ridership first pass one million passengers in a calendar year?", a:"2023", note:"City figures: 1,108,092 riders in 2023, up from 846,622 in 2022."}
      ]},
    { id:"architecture", title:"Architecture and Art Deco", type:"standard", max:5,
      rule:"One point per correct answer. Question 4 is closest-wins.",
      note:"Show architectural details on the main screen if you can. Accept OTR for Over-the-Rhine.",
      questions:[
        {q:"Which Art Deco railway terminal, opened in 1933, is now home to the Cincinnati Museum Center?", a:"Union Terminal"},
        {q:"Which 49-storey Art Deco skyscraper at Fifth and Vine opened in 1930?", a:"Carew Tower", flag:"Confirm 49 storeys and the 1930 opening."},
        {q:"Which neighbourhood holds one of the largest collections of Italianate buildings in the United States?", a:"Over-the-Rhine", note:"Accept OTR."},
        {q:"In which year did Cincinnati Music Hall open?", a:"1878", closest:true, flag:"Confirm 1878."},
        {q:"The Tyler Davidson Fountain, topped by the Genius of Water, stands on which downtown square?", a:"Fountain Square"}
      ]},
    { id:"sport", title:"Cincinnati sport, past and present", type:"standard", max:5,
      rule:"One point per correct answer.",
      note:"High energy. Accept Royals. Check current stadium and arena names before you present.",
      questions:[
        {q:"Oscar Robertson starred for which Cincinnati NBA team before it moved to Kansas City in 1972?", a:"The Cincinnati Royals"},
        {q:"In 1869, which Cincinnati club became America's first openly all-professional baseball team?", a:"The Cincinnati Red Stockings"},
        {q:"Which legendary coach founded the Cincinnati Bengals in 1968?", a:"Paul Brown"},
        {q:"Which ECHL hockey team plays at Heritage Bank Center?", a:"The Cincinnati Cyclones", note:"Arena name confirmed: Heritage Bank Center (named 2019)."},
        {q:"What is the name of FC Cincinnati's supporters' section at TQL Stadium?", a:"The Bailey", flag:"Check the stadium name is still TQL Stadium."}
      ]},
    { id:"pictures", title:"Picture round: where in Cincinnati?", type:"picture", max:10, forceMode:"end",
      rule:"Two points per photo: one for the landmark, one for the specific detail or location.",
      note:"Answer sheets at the end of the round. Choose and credit five real photos before the night. No images are selected yet.",
      questions:[
        {q:"Photo 1: where is this?", a:"Underside of the Roebling Suspension Bridge", flag:"Choose the exact photo."},
        {q:"Photo 2: where is this?", a:"Close-up of a mosaic at Union Terminal", flag:"Choose the exact photo."},
        {q:"Photo 3: where is this?", a:"A Mount Adams staircase", flag:"Choose which staircase, so the second point is fair."},
        {q:"Photo 4: where is this?", a:"Signage or architectural detail at Findlay Market", flag:"Choose the exact photo."},
        {q:"Photo 5: where is this?", a:"A section of the riverfront flood-wall murals", flag:"Choose which mural."}
      ]},
    { id:"culture", title:"Innovations, culture and quirks", type:"standard", max:5,
      rule:"One point per correct answer.",
      note:"Merle Robbins invented UNO. Play-Doh began as a wallpaper cleaner made by Kutol.",
      questions:[
        {q:"Which spice gives Cincinnati chili its distinctive flavour?", a:"Cinnamon", note:"Accept cinnamon with or without cocoa."},
        {q:"UNO was invented in 1971 by barber Merle Robbins in which Cincinnati suburb?", a:"Reading, Ohio"},
        {q:"Which Cincinnati Zoo hippo, born prematurely in 2017, became a global star?", a:"Fiona", note:"Replaces the Harambe question, which asks the room to celebrate a death."},
        {q:"Which Cincinnati doctor gave his name to a life-saving anti-choking manoeuvre?", a:"Henry Heimlich"},
        {q:"Play-Doh began in Cincinnati as a cleaner for which household item?", a:"Wallpaper"}
      ]},
    { id:"geography", title:"Geography, neighbourhoods and nicknames", type:"standard", max:5,
      rule:"One point per correct answer.",
      note:"Quick round. The old version asked for Over-the-Rhine twice and the Ohio River again.",
      questions:[
        {q:"Which Kentucky city sits at the southern end of the Roebling Bridge?", a:"Covington"},
        {q:"Which park in Covington is famous for its view of the Cincinnati skyline?", a:"Devou Park"},
        {q:"Which interstate forms Cincinnati's outer beltway, circling three states?", a:"I-275"},
        {q:"In 1873 the Cincinnati Observatory moved from Mount Adams to which neighbourhood, named after it?", a:"Mount Lookout"},
        {q:"In 1854, which American poet called Cincinnati the \"Queen of the West\"?", a:"Henry Wadsworth Longfellow", flag:"Check the Catawba wine poem and date before using."}
      ]},
    { id:"numbers", title:"Numbers round", type:"numbers", max:5, finale:true,
      rule:"Every answer is a number. Keep your first three: they spell something.",
      note:"Answers one to three spell 01 / 19 / 2021. Tell the room what that date is before you reveal it. (Miguel to add the story.)",
      questions:[
        {q:"How many NFL teams call Cincinnati home?", a:"1 (write it as 01)"},
        {q:"FC Cincinnati played its first MLS season in which year? Give the last two digits.", a:"19", flag:"Confirm 2019 is the first season."},
        {q:"In which year did TQL Stadium open?", a:"2021", flag:"Confirm the opening year."},
        {q:"In which year did the Red Stockings go professional?", a:"1869"},
        {q:"In which year did the modern streetcar open to passengers?", a:"2016", note:"Passenger service began September 2016."}
      ]},
    { id:"facts", title:"Random cool facts", type:"standard", max:5,
      rule:"One point per correct answer.",
      note:"Reveal with drama. Keep the koala answer light: the fingerprints are similar, not forensic twins.",
      questions:[
        {q:"Which company, famous for plastic bricks, makes more tyres each year than any other manufacturer?", a:"LEGO (tiny toy tyres)", note:"Guinness World Records lists it as the largest annual volume toy tyre manufacturer."},
        {q:"After water, what is the most-consumed drink in the world?", a:"Tea"},
        {q:"What is the largest desert on Earth?", a:"Antarctica"},
        {q:"\"Quarantine\" comes from Italian words meaning how many days?", a:"40"},
        {q:"Which animal, apart from primates, is famous for having fingerprints very like ours?", a:"The koala"}
      ]},
    { id:"bonus", title:"Bonus: London Underground", type:"bonus", min:-20, max:60, timer:150,
      rule:"Two and a half minutes. Plus one for each real Underground station, minus one for each invented one. Duplicates score nothing.",
      note:"Underground stations only, not DLR, Overground or Elizabeth line unless the station is also on the Underground. Have the TfL station list open to adjudicate.",
      questions:[
        {q:"List as many real London Underground stations as you can.", a:"Marked against the TfL list."}
      ]},
    { id:"tiebreak", title:"Tiebreaker", type:"tiebreak", max:0,
      rule:"Closest answer wins.",
      note:"Only if teams are level at the top.",
      questions:[
        {q:"How tall is Carew Tower, in feet?", a:"574 feet", closest:true, flag:"Confirm 574 ft."}
      ]}
  ],
  spares:[
    {q:"Which Quaker abolitionist, nicknamed the president of the Underground Railroad, moved to Cincinnati in 1847?", a:"Levi Coffin"},
    {q:"Which grocery giant was founded in Cincinnati in 1883?", a:"Kroger (Bernard Kroger)"},
    {q:"Which Cincinnati company, founded in 1837, makes Tide and Pampers?", a:"Procter & Gamble"},
    {q:"Which Cincinnati suburb gave UNO its name? (hard)", a:"Reading", note:"Use only if you drop question 2 in the culture round."}
  ]
};
