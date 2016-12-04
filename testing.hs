-- Having a look at Haskell

doubleMe x = x + x

doubleUs x y = doubleMe x + doubleMe y

doubleSmallNo x = if x > 20
                    then x
                    else x * 2

lettersOnly :: [Char] -> [Char]
lettersOnly str = [ x | x <- str, x `elem` ['a'..'z'] ]
-- lettersOnly "96 tears in 24 hours" => "tearsinhours"

factorial x = product [1..x]
-- factorial 5 => 120

getSunburn mins
      | mins <= 5 = "UV ray exposure not too much!"
      | mins <= 10 = "Still not too much UV exposure"
      | mins <= 15 = "If you have fair skin, you're going to burn soon, if not already ..."
      | mins <= 20 = "It may not seem that long, but really, be careful in the NZ sun."
      | otherwise = "Careful! Put on some sunblock!"
-- getSunburn 22 => "Careful! Put on some sunblock!"

getMax [] = error "Empty list"
getMax [x] = x
getMax (x:xs) = max x (getMax xs)
-- getMax [2, 24, 9, 78, 50] => 78

-- // JS equiv
-- function getMax (arr) {
--   if (arr.length === 0) return "Empty list"
--   else if (arr.length === 1) return arr
--   else return Math.max(...arr)
-- }
