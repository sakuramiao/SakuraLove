/**
 * 天境仙羹 - 食用后获得抗性和生命再生
 * 效果: DAMAGE_RESISTANCE 1 (60秒) + REGENERATION 2 (30秒)
 */
function onConsume(event) {
    var player = event.getPlayer();
    // 抗性提升 60秒
    player.addPotionEffect(
        new org.bukkit.potion.PotionEffect(
            org.bukkit.potion.PotionEffectType.DAMAGE_RESISTANCE,
            1200,  // 60秒
            0      // 等级1 (amplifier 0)
        )
    );
    // 生命再生 30秒 (等级2 = amplifier 1)
    player.addPotionEffect(
        new org.bukkit.potion.PotionEffect(
            org.bukkit.potion.PotionEffectType.REGENERATION,
            600,   // 30秒
            1      // 等级2 (amplifier 1)
        )
    );
}
