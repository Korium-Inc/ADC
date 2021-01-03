const updmono = extendContent(UnitType, "updated-mono", {});
updmono.constructor = () => extend(UnitEntity, {});
updmono.defaultController = () => extend(MinerAI, {});

updmono.flying = true;
updmono.drag = 0.06;
updmono.accel = 0.12;
updmono.speed = 1.5;
updmono.health = 200;
updmono.engineSize = 1.8;
updmono.engineOffSet = 5.7;
updmono.range = 60;
updmono.isCounted = false;
updmono.ammoType = AmmoTypes.powerLow;
updmono.mineTier = 4;
updmono.mineSpeed = 4;

updmono.abilities.add(new RepairFieldAbility(5, 60, 50));
