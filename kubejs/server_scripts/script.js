// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

// All Basic Tool Recipes
ServerEvents.recipes(event => {

  // Removing Old Tool Recipes

  // Sword
  event.remove({output: 'minecraft:iron_sword'})
  event.remove({output: 'minecraft:golden_sword'})
  event.remove({output: 'minecraft:diamond_sword'})
  event.remove({output: 'stalwart_dungeons:tungsten_sword'})
  event.remove({output: 'stalwart_dungeons:chorundum_sword'})
  event.remove({output: 'create_sa:brass_sword'})
  event.remove({output: 'create_sa:zinc_sword'})
  event.remove({output: 'create_sa:copper_sword'})
  event.remove({output: 'byg:pendorite_sword'})
  event.remove({output: 'aquaculture:neptunium_sword'})

  // Pickaxe
  event.remove({output: 'minecraft:iron_pickaxe'})
  event.remove({output: 'minecraft:golden_pickaxe'})
  event.remove({output: 'minecraft:diamond_pickaxe'})
  event.remove({output: 'stalwart_dungeons:tungsten_pickaxe'})
  event.remove({output: 'stalwart_dungeons:chorundum_pickaxe'})
  event.remove({output: 'create_sa:brass_pickaxe'})
  event.remove({output: 'create_sa:zinc_pickaxe'})
  event.remove({output: 'create_sa:copper_pickaxe'})
  event.remove({output: 'byg:pendorite_pickaxe'})
  event.remove({output: 'aquaculture:neptunium_pickaxe'})

  // Axe
  event.remove({output: 'minecraft:iron_axe'})
  event.remove({output: 'minecraft:golden_axe'})
  event.remove({output: 'minecraft:diamond_axe'})
  event.remove({output: 'stalwart_dungeons:tungsten_axe'})
  event.remove({output: 'stalwart_dungeons:chorundum_axe'})
  event.remove({output: 'create_sa:brass_axe'})
  event.remove({output: 'create_sa:zinc_axe'})
  event.remove({output: 'create_sa:copper_axe'})
  event.remove({output: 'byg:pendorite_axe'})
  event.remove({output: 'aquaculture:neptunium_axe'})

  // Shovel
  event.remove({output: 'minecraft:iron_shovel'})
  event.remove({output: 'minecraft:golden_shovel'})
  event.remove({output: 'minecraft:diamond_shovel'})
  event.remove({output: 'stalwart_dungeons:tungsten_shovel'})
  event.remove({output: 'stalwart_dungeons:chorundum_shovel'})
  event.remove({output: 'create_sa:brass_shovel'})
  event.remove({output: 'create_sa:zinc_shovel'})
  event.remove({output: 'create_sa:copper_shovel'})
  event.remove({output: 'byg:pendorite_shovel'})
  event.remove({output: 'aquaculture:neptunium_shovel'})

  // Hoe
  event.remove({output: 'minecraft:iron_hoe'})
  event.remove({output: 'minecraft:golden_hoe'})
  event.remove({output: 'minecraft:diamond_hoe'})
  event.remove({output: 'stalwart_dungeons:tungsten_hoe'})
  event.remove({output: 'stalwart_dungeons:chorundum_hoe'})
  event.remove({output: 'create_sa:brass_hoe'})
  event.remove({output: 'create_sa:zinc_hoe'})
  event.remove({output: 'create_sa:copper_hoe'})
  event.remove({output: 'byg:pendorite_hoe'})
  event.remove({output: 'aquaculture:neptunium_hoe'})

  // Knifes

  // Farmers Delight & Frozen Delight
  event.remove({output: 'farmersdelight:iron_knife'})
  event.remove({output: 'farmersdelight:golden_knife'})
  event.remove({output: 'farmersdelight:diamond_knife'})
  event.remove({output: 'frozen_delight:ice_knife'})

  // Aqua Culture
  event.remove({output: 'aquaculture:iron_fillet_knife'})
  event.remove({output: 'aquaculture:gold_fillet_knife'})
  event.remove({output: 'aquaculture:diamond_fillet_knife'})
  event.remove({output: 'aquaculture:neptunium_fillet_knife'})

  // Delightful
  event.remove({output: 'delightful:steel_knife'})
  event.remove({output: 'delightful:silver_knife'})
  event.remove({output: 'delightful:brass_knife'})
  event.remove({output: 'delightful:constantan_knife'})
  event.remove({output: 'delightful:electrum_knife'})
  event.remove({output: 'delightful:lead_knife'})
  event.remove({output: 'delightful:nickel_knife'})
  event.remove({output: 'delightful:zinc_knife'})



  // Removing Useless Tools
  event.remove({output: 'alexsmobs:ghostly_pickaxe'})
  event.remove({output: 'create_sa:experience_sword'})
  event.remove({output: 'create_sa:experience_pickaxe'})
  event.remove({output: 'create_sa:experience_axe'})
  event.remove({output: 'create_sa:experience_shovel'})
  event.remove({output: 'create_sa:experience_knife'})

  // Adding Back Recipes

  // Swords
  event.shaped('minecraft:iron_sword', [
    'AirAAir',
     'AirAAir',
     'AirSAir'
  ], {
    S: '#forge:rods/treated_wood',
    A: 'minecraft:iron_ingot',
    Air: 'minecraft:air'
  })

  event.shaped('minecraft:golden_sword', [
    'AirAAir',
     'AirAAir',
     'AirSAir'
  ], {
    S: '#forge:rods/treated_wood',
    A: 'minecraft:gold_ingot',
    Air: 'minecraft:air'
  })

  event.shaped('minecraft:diamond_sword', [
    'AirAAir',
     'AirAAir',
     'AirSAir'
  ], {
    S: '#forge:rods/treated_wood',
    A: 'minecraft:diamond',
    Air: 'minecraft:air'
  })

  event.shaped('stalwart_dungeons:tungsten_sword', [
    'AirAAir',
     'AirAAir',
     'AirSAir'
  ], {
    S: '#forge:rods/treated_wood',
    A: 'stalwart_dungeons:tungsten_ingot',
    Air: 'minecraft:air'
  })

  event.shaped('stalwart_dungeons:chorundum_sword', [
    'AirAAir',
     'AirAAir',
     'AirSAir'
  ], {
    S: '#forge:rods/treated_wood',
    A: 'stalwart_dungeons:chorundum',
    Air: 'minecraft:air'
  })

  event.shaped('create_sa:brass_sword', [
    'AirAAir',
     'AirAAir',
     'AirSAir'
  ], {
    S: '#forge:rods/treated_wood',
    A: 'create:brass_ingot',
    Air: 'minecraft:air'
  })

  event.shaped('create_sa:zinc_sword', [
    'AirAAir',
    'AirAAir',
    'AirSAir'
  ], {
    S: '#forge:rods/treated_wood',
    A: 'create:zinc_ingot',
    Air: 'minecraft:air'
  })

  event.shaped('create_sa:copper_sword', [
    'AirAAir',
    'AirAAir',
    'AirSAir'
  ], {
    S: '#forge:rods/treated_wood',
    A: 'minecraft:copper_ingot',
    Air: 'minecraft:air'
  })

  event.shaped('create_sa:copper_sword', [
    'AirAAir',
     'AirAAir',
     'AirSAir'
  ], {
    S: '#forge:rods/treated_wood',
    A: 'minecraft:copper_ingot',
    Air: 'minecraft:air'
  })

  event.shaped('byg:pendorite_sword', [
    'AirAAir',
     'AirAAir',
     'AirSAir'
  ], {
    S: '#forge:rods/treated_wood',
    A: 'byg:pendorite_ingot',
    Air: 'minecraft:air'
  })

  event.shaped('aquaculture:neptunium_sword', [
    'AirAAir',
    'AirAAir',
    'AirSAir'
  ], {
    S: '#forge:rods/treated_wood',
    A: 'aquaculture:neptunium_ingot',
    Air: 'minecraft:air'
  })

  // Pickaxes
    event.shaped('minecraft:iron_pickaxe', [
        'AAA',
         'AirSAir',
         'AirSAir'
      ], {
        S: '#forge:rods/treated_wood',
        A: 'minecraft:iron_ingot',
        Air: 'minecraft:air'
      })

      event.shaped('minecraft:golden_pickaxe', [
        'AAA',
         'AirSAir',
         'AirSAir'
      ], {
        S: '#forge:rods/treated_wood',
        A: 'minecraft:gold_ingot',
        Air: 'minecraft:air'
      })

      event.shaped('minecraft:diamond_pickaxe', [
        'AAA',
         'AirSAir',
         'AirSAir'
      ], {
        S: '#forge:rods/treated_wood',
        A: 'minecraft:diamond',
        Air: 'minecraft:air'
      })

      event.shaped('stalwart_dungeons:tungsten_pickaxe', [
        'AAA',
         'AirSAir',
         'AirSAir'
      ], {
        S: '#forge:rods/treated_wood',
        A: 'stalwart_dungeons:tungsten_ingot',
        Air: 'minecraft:air'
      })

      event.shaped('stalwart_dungeons:chorundum_pickaxe', [
        'AAA',
         'AirSAir',
         'AirSAir'
      ], {
        S: '#forge:rods/treated_wood',
        A: 'stalwart_dungeons:chorundum',
        Air: 'minecraft:air'
      })

      event.shaped('create_sa:brass_pickaxe', [
        'AAA',
         'AirSAir',
         'AirSAir'
      ], {
        S: '#forge:rods/treated_wood',
        A: 'create:brass_ingot',
        Air: 'minecraft:air'
      })

      event.shaped('create_sa:zinc_pickaxe', [
        'AAA',
         'AirSAir',
         'AirSAir'
      ], {
        S: '#forge:rods/treated_wood',
        A: 'create:zinc_ingot',
        Air: 'minecraft:air'
      })

      event.shaped('create_sa:copper_pickaxe', [
        'AAA',
         'AirSAir',
         'AirSAir'
      ], {
        S: '#forge:rods/treated_wood',
        A: 'minecraft:copper_ingot',
        Air: 'minecraft:air'
      })

      event.shaped('create_sa:copper_pickaxe', [
        'AAA',
         'AirSAir',
         'AirSAir'
      ], {
        S: '#forge:rods/treated_wood',
        A: 'minecraft:copper_ingot',
        Air: 'minecraft:air'
      })

      event.shaped('byg:pendorite_pickaxe', [
        'AAA',
         'AirSAir',
         'AirSAir'
      ], {
        S: '#forge:rods/treated_wood',
        A: 'byg:pendorite_ingot',
        Air: 'minecraft:air'
      })

      event.shaped('aquaculture:neptunium_pickaxe', [
        'AAA',
         'AirSAir',
         'AirSAir'
      ], {
        S: '#forge:rods/treated_wood',
        A: 'aquaculture:neptunium_ingot',
        Air: 'minecraft:air'
      })

    // Axes
    event.shaped('minecraft:iron_axe', [
      'AAAir',
       'ASAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:iron_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('minecraft:golden_axe', [
      'AAAir',
       'ASAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:gold_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('minecraft:diamond_axe', [
      'AAAir',
      'ASAir',
      'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:diamond',
      Air: 'minecraft:air'
    })

    event.shaped('stalwart_dungeons:tungsten_axe', [
      'AAAir',
       'ASAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'stalwart_dungeons:tungsten_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('stalwart_dungeons:chorundum_axe', [
      'AAAir',
       'ASAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'stalwart_dungeons:chorundum',
      Air: 'minecraft:air'
    })

    event.shaped('create_sa:brass_axe', [
      'AAAir',
       'ASAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'create:brass_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('create_sa:zinc_axe', [
      'AAAir',
       'ASAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'create:zinc_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('create_sa:copper_axe', [
      'AAAir',
       'ASAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:copper_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('create_sa:copper_axe', [
      'AAAir',
       'ASAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:copper_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('byg:pendorite_axe', [
      'AAAir',
       'ASAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'byg:pendorite_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('aquaculture:neptunium_axe', [
      'AAAir',
       'ASAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'aquaculture:neptunium_ingot',
      Air: 'minecraft:air'
    })

    // Shovels
    event.shaped('minecraft:iron_shovel', [
      'AirAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:iron_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('minecraft:golden_shovel', [
      'AirAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:gold_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('minecraft:diamond_shovel', [
      'AirAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:diamond',
      Air: 'minecraft:air'
    })

    event.shaped('stalwart_dungeons:tungsten_shovel', [
      'AirAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'stalwart_dungeons:tungsten_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('stalwart_dungeons:chorundum_shovel', [
      'AirAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'stalwart_dungeons:chorundum',
      Air: 'minecraft:air'
    })

    event.shaped('create_sa:brass_shovel', [
      'AirAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'create:brass_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('create_sa:zinc_shovel', [
      'AirAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'create:zinc_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('create_sa:copper_shovel', [
      'AirAAir',
      'AirSAir',
      'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:copper_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('create_sa:copper_shovel', [
      'AirAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:copper_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('byg:pendorite_shovel', [
      'AirAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'byg:pendorite_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('aquaculture:neptunium_shovel', [
      'AirAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'aquaculture:neptunium_ingot',
      Air: 'minecraft:air'
    })

    // Hoes
    event.shaped('minecraft:iron_hoe', [
      'AAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:iron_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('minecraft:golden_hoe', [
      'AAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:gold_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('minecraft:diamond_hoe', [
      'AAAir',
      'AirSAir',
      'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:diamond',
      Air: 'minecraft:air'
    })

    event.shaped('stalwart_dungeons:tungsten_hoe', [
      'AAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'stalwart_dungeons:tungsten_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('stalwart_dungeons:chorundum_hoe', [
      'AAAir',
      'AirSAir',
      'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'stalwart_dungeons:chorundum',
      Air: 'minecraft:air'
    })

    event.shaped('create_sa:brass_hoe', [
      'AAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'create:brass_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('create_sa:zinc_hoe', [
      'AAAir',
      'AirSAir',
      'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'create:zinc_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('create_sa:copper_hoe', [
      'AAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:copper_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('create_sa:copper_hoe', [
      'AAAir',
      'AirSAir',
      'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:copper_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('byg:pendorite_hoe', [
      'AAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'byg:pendorite_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('aquaculture:neptunium_hoe', [
      'AAAir',
       'AirSAir',
       'AirSAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'aquaculture:neptunium_ingot',
      Air: 'minecraft:air'
    })

    // Knifes

    // Farmers Delight & Frozen Delight
    event.shaped('farmersdelight:iron_knife', [
      'AirAAir',
       'AirSAir',
       'AirAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:iron_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('farmersdelight:golden_knife', [
      'AirAAir',
       'AirSAir',
       'AirAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:gold_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('farmersdelight:diamond_knife', [
      'AirAAir',
       'AirSAir',
       'AirAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:diamond',
      Air: 'minecraft:air'
    })

    event.shaped('frozen_delight:ice_knife', [
      'AirAAir',
       'AirSAir',
       'AirAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'frozenup:cut_ice',
      Air: 'minecraft:air'
    })

    // Aqua Culture
    event.shaped('aquaculture:iron_fillet_knife', [
      'AirAirA',
       'AirAAir',
       'SAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:iron_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('aquaculture:gold_fillet_knife', [
      'AirAirA',
       'AirAAir',
       'SAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:gold_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('aquaculture:diamond_fillet_knife', [
      'AirAirA',
       'AirAAir',
       'SAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'minecraft:diamond',
      Air: 'minecraft:air'
    })

    event.shaped('aquaculture:neptunium_fillet_knife', [
      'AirAirA',
       'AirAAir',
       'SAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'aquaculture:neptunium_ingot',
      Air: 'minecraft:air'
    })

    // Delightful
    event.shaped('delightful:steel_knife', [
      'AirAAir',
       'AirSAir',
       'AirAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'immersiveengineering:ingot_steel',
      Air: 'minecraft:air'
    })

    event.shaped('delightful:silver_knife', [
      'AirAAir',
       'AirSAir',
       'AirAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'immersiveengineering:ingot_silver',
      Air: 'minecraft:air'
    })
    event.shaped('delightful:brass_knife', [
      'AirAAir',
       'AirSAir',
       'AirAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'create:brass_ingot',
      Air: 'minecraft:air'
    })

    event.shaped('delightful:constantan_knife', [
      'AirAAir',
       'AirSAir',
       'AirAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'immersiveengineering:ingot_constantan',
      Air: 'minecraft:air'
    })
    event.shaped('delightful:electrum_knife', [
      'AirAAir',
       'AirSAir',
       'AirAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'immersiveengineering:ingot_electrum',
      Air: 'minecraft:air'
    })

    event.shaped('delightful:lead_knife', [
      'AirAAir',
       'AirSAir',
       'AirAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'immersiveengineering:ingot_lead',
      Air: 'minecraft:air'
    })
    event.shaped('delightful:nickel_knife', [
      'AirAAir',
       'AirSAir',
       'AirAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'immersiveengineering:ingot_nickel',
      Air: 'minecraft:air'
    })

    event.shaped('delightful:zinc_knife', [
      'AirAAir',
       'AirSAir',
       'AirAirAir'
    ], {
      S: '#forge:rods/treated_wood',
      A: 'create:zinc_ingot',
      Air: 'minecraft:air'
    })

    
    })
