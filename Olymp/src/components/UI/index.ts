import UButton from './UButton.vue';
import ULang from './ULang.vue';
import USelect from './USelect.vue';

//переиспользуемые UI-компоненты вынесены в отдельную папку
//экспортируются в данном index.ts-файле, и регистрируются одной командой в App.vue
export default [UButton, ULang, USelect];
