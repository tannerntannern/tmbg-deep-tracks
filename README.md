# They Might Be Giants - Deep Tracks
I was putting together a They Might Be Giants ["deep tracks only"](https://youtu.be/caR28rdUkAY?si=v9wNX3xCIF8uCTNE&t=244) playlist, and I wanted to be objective about what qualifies a "deep track."  For this exercise, I considered any track that falls below some threshold of popularity to be a deep track.

## Data and Methods
Not all sources agree on the most popular tracks, so I decided to collect "top 30" lists from all that were easily accessible, and use a "three strikes" approach to determine whether a track is too popular to be a deep track (if a track appears in 3 separate lists, it's too popular):

- Top 30 from Amazon Music
- Top 30 from Apple Music
- Top 30 from Pandora
- Top 30 from setlist.fm
- Top 10 from Spotify (top 30 not directly available)
- Top 30 from the unofficial TMBG fan wiki

I also collected the top tracks within each album for a few sources.  The idea here was to balance out the fact that songs from Flood make up about half of each top 30 list.

- Top 3 on each album from Spotify (by # of plays)
- Top several on each album from Apple Music (these tracks have a "dot" next to them in the UI)

_All data was collected on 2024-09-08_

## Results
`node index.js` will spit out the number of strikes for each track seen in these lists.  Here is the result (_as of 2024-09-08_):
```
8 ana ng
8 doctor worm
8 don't let's start
7 istanbul (not constantinople)
7 birdhouse in your soul
7 particle man
5 stuff is way
5 kiss me, son of god
5 why does the sun shine? (the sun is a mass of incandescent gas)
5 boss of me
5 the mesopotamians
5 i palindrome i
5 the guitar
4 twisting
4 the statue got me high
4 she's an angel
4 brontosaurus
3 whistling in the dark
3 lucky ball and chain
3 dead
3 your racist friend
3 minimum wage
3 they might be giants
3 we want a rock
3 women & men
3 someone keeps moving my chair
3 letterbox
3 i can't remember the dream
3 let's get this over with
3 i love you for psychological reasons
3 erase
3 can't keep johnny down
3 experimental film
3 museum of idiots
3 damn good times
3 new york city
3 i should be allowed to think
3 no one knows my plan
3 hey, mr. dj, i thought you said we had a deal
3 older
2 you're on fire
2 sapphire bullets of pure love
2 hearing aid
2 dinner bell
2 clap your hands
2 where your eyes don't go
2 i left my body
2 i am alone
2 ecnalubma
2 answer
2 marty beller mask
2 tubthumping
2 electronic istanbul (not constantinople)
2 you probably get that a lot
2 when will you die?
2 i'm your boyfriend now
2 we live in a dump
2 brain problem situation
2 i'm impressed
2 tippecanoe and tyler too
2 now is strange
2 i'm all that you can think of
2 working undercover for the man
2 robot parade
2 reprehensible
2 certain people i could name
2 snail shell
2 spy
2 the end of the tour
2 rest awhile
2 on the drag
2 rhythm section want ad
2 man, it's so loud in here
2 mrs. bluebeard
2 spiraling shape
2 till my head falls off
2 they'll need a crane
2 put your hand inside the puppet head
1 road movies to berlin
1 hot cha
1 theme from flood
1 road movie to berlin
1 synopsis for latecomers
1 moonbeam rays
1 all time what
1 by the time you get this
1 apophenia
1 trouble awful devil evil
1 bills, bills, bills
1 aaa
1 authenticity trip
1 boat of car
1 you don't like me
1 why did you grow a beard?
1 vestibule
1 i hear a new world
1 memo to human resources
1 thunderbird
1 dr. evil
1 sleeping in the flowers
1 i'm sick (of this american life)
1 they got lost
1 window
1 part of you wants to believe me
1 thermostat
1 dig my grave
1 it's not my birthday
1 nightgown of the sullen moon
1 number three
1 yeh yeh
1 james k. polk
1 fingertips
1 the famous polka
1 shoehorn with teeth
1 she's actual size
1 drink!
1 cyclops rock
1 alphabet of nations
1 meet james ensor
1 the communists have the music
1 i broke my own rule
1 hate the villanelle
1 nanobots
1 careful what you pack
1 pittsburgh (in situ)
1 renew my subscription
1 skullivan
1 the edison museum
1 destination moon
1 snowball in hell
1 cave fish
1 when will you die
1 sensurround
```
