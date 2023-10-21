function random(x){
    return Math.floor(Math.random()*x)
}
var armorImages = [
    "armor/kirasa.PNG","armor/kora.PNG","armor/kora2.PNG","armor/6b2.PNG","armor/6bs.PNG","armor/paca.PNG", "armor/untar.PNG"];
var weaponImages = ["weapons/mp-153.PNG","weapons/adar.PNG","weapons/ump.PNG","weapons/sks.PNG","weapons/saiga-12ga.PNG","weapons/mp5.PNG","weapons/rfb.PNG","weapons/goronostay.PNG","weapons/mp9.PNG","weapons/ak-74n.PNG","weapons/akm.PNG","weapons/kedr.PNG","weapons/makarov.PNG","weapons/mosin.PNG","weapons/vityaz.PNG","weapons/aks-74U.PNG"]
var bagImages = ["bag/duffle.PNG","bag/mbss.PNG","bag/scavbp.PNG","bag/tbag.PNG","bag/vkbo.PNG"]
var helmetImages = ["helmet/beret.PNG","helmet/sfera.PNG","helmet/orzeszek.PNG","helmet/boonie.PNG", "helmet/untar.PNG"]

var mapImages = ["map/customs.jpg","map/factory.jpg","map/reserve.jpg","map/woods.jpg"]
genArmor = random(armorImages.length)
genWeapon = random(weaponImages.length)
genBag = random(bagImages.length)
genHelmet = random(helmetImages.length)
genMap = random(mapImages.length)
//podkładanie wylosowanych zdjęć 
document.getElementById("armor").src = armorImages[genArmor];
nazwa_armor = String(armorImages[genArmor]);
nazwa_armor = nazwa_armor.replace("armor/", "");
nazwa_armor = nazwa_armor.replace(".PNG", "");
nazwa_armor = nazwa_armor.toUpperCase()
document.getElementById("armor_name").innerHTML = nazwa_armor;

document.getElementById("weapon").src = weaponImages[genWeapon];
nazwa_weapon = String(weaponImages[genWeapon]);
nazwa_weapon = nazwa_weapon.replace("weapons/", "");
nazwa_weapon = nazwa_weapon.replace(".PNG", "");
nazwa_weapon = nazwa_weapon.toUpperCase()
document.getElementById("weapon_name").innerHTML = nazwa_weapon;  

document.getElementById("bag").src = bagImages[genBag];
nazwa_bag = String(bagImages[genBag]);
nazwa_bag = nazwa_bag.replace("bag/", "");
nazwa_bag = nazwa_bag.replace(".PNG", "");
nazwa_bag = nazwa_bag.toUpperCase()
document.getElementById("bag_name").innerHTML = nazwa_bag;

document.getElementById("helmet").src = helmetImages[genHelmet];
nazwa_helmet = String(helmetImages[genHelmet]);
nazwa_helmet = nazwa_helmet.replace("helmet/", "");
nazwa_helmet = nazwa_helmet.replace(".PNG", "")
nazwa_helmet = nazwa_helmet.toUpperCase()
document.getElementById("helmet_name").innerHTML = nazwa_helmet 

document.getElementById("map").src = mapImages[genMap];
nazwa_map = String(mapImages[genMap]);
nazwa_map = nazwa_map.replace("map/", "");
nazwa_map = nazwa_map.replace(".jpg", "")
nazwa_map = nazwa_map.toUpperCase()
document.getElementById("map_name").innerHTML = nazwa_map
document.getElementById("button1").onclick = function(){
    
    
    genArmor = random(armorImages.length)
    genWeapon = random(weaponImages.length)
    genBag = random(bagImages.length)
    genHelmet = random(helmetImages.length)
    genMap = random(mapImages.length)
    //podkładanie wylosowanych zdjęć 
    document.getElementById("armor").src = armorImages[genArmor];
    nazwa_armor = String(armorImages[genArmor]);
    nazwa_armor = nazwa_armor.replace("armor/", "");
    nazwa_armor = nazwa_armor.replace(".PNG", "");
    nazwa_armor = nazwa_armor.toUpperCase()
    document.getElementById("armor_name").innerHTML = nazwa_armor;

    document.getElementById("weapon").src = weaponImages[genWeapon];
    nazwa_weapon = String(weaponImages[genWeapon]);
    nazwa_weapon = nazwa_weapon.replace("weapons/", "");
    nazwa_weapon = nazwa_weapon.replace(".PNG", "");
    nazwa_weapon = nazwa_weapon.toUpperCase()
    document.getElementById("weapon_name").innerHTML = nazwa_weapon;  
    
    document.getElementById("bag").src = bagImages[genBag];
    nazwa_bag = String(bagImages[genBag]);
    nazwa_bag = nazwa_bag.replace("bag/", "");
    nazwa_bag = nazwa_bag.replace(".PNG", "");
    nazwa_bag = nazwa_bag.toUpperCase()
    document.getElementById("bag_name").innerHTML = nazwa_bag;
    
    document.getElementById("helmet").src = helmetImages[genHelmet];
    nazwa_helmet = String(helmetImages[genHelmet]);
    nazwa_helmet = nazwa_helmet.replace("helmet/", "");
    nazwa_helmet = nazwa_helmet.replace(".PNG", "")
    nazwa_helmet = nazwa_helmet.toUpperCase()
    document.getElementById("helmet_name").innerHTML = nazwa_helmet 

    document.getElementById("map").src = mapImages[genMap];
    nazwa_map = String(mapImages[genMap]);
    nazwa_map = nazwa_map.replace("map/", "");
    nazwa_map = nazwa_map.replace(".jpg", "")
    nazwa_map = nazwa_map.toUpperCase()
    document.getElementById("map_name").innerHTML = nazwa_map
}