const { Mixin } = Shopware;

Mixin.register('cms-element', {
    methods: {
        getFallbackSlotConfig(entity) {
            const parentLanguageId = Shopware.Context.api.language?.parentId ?? null;
            const systemLanguageId = Shopware.Context.api.systemLanguageId;
            let slotConfig = null;

            // Zuerst von der Elternsprache erben
            if (parentLanguageId) {
                slotConfig = entity.translations.find(
                    (translation) => translation.languageId === parentLanguageId
                )?.slotConfig ?? null;
            }

            // Erst wenn nichts da ist, von der Systemsprache erben
            if (!slotConfig) {
                slotConfig = entity.translations.find(
                    (translation) => translation.languageId === systemLanguageId
                )?.slotConfig ?? null;
            }

            return slotConfig;
        }
    }
});
