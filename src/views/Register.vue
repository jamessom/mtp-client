<template>
  <section class="section">
    <div class="columns">

      <div class="column">
        <h1>Pré-cadastro de Torcedor</h1>

        <input-base label="Nome completo" :placeholder="this.tips.fullName" />
        <gender-select label="Sexo" :options=genders />
        <input-base label='Email' type="email" :placeholder="this.tips.email" />
        <input-base label='Repetir e-mail' type="email" :placeholder="this.tips.reEmail" />
        <gender-select label="Tipo de documento" :options=documentType />
        <input-base label='Número do documento' :placeholder="this.tips.docNumber" />
        <input-base label='Senha' type='password' :placeholder="this.tips.password" />
        <input-base label='Repetir senha' type='password' :placeholder="this.tips.rePassword" />
      </div>
    </div>
  </section>
</template>

<script>
import InputBase from '@/components/InputBase.vue';
import GenderSelect from '@/components/GenderSelect.vue';

export default {
  name: 'Register',
  data() {
    return {
      tips: {
        fullName: 'Por favor informe seu nome completo',
        email: 'Por favor informe seu email',
        reEmail: 'Por faver informe seu email novamente',
        docNumber: 'Por favor informe o número do documento selecionado',
        password: 'Por favor informe uma senha',
        rePassword: 'Por favor informe sua senha novamente',
      },
      genders: [
        { value: 'selected', text: 'Selecione uma opção' },
        { value: 'M', text: 'Masculino' },
        { value: 'F', text: 'Feminino' },
        { value: 'O', text: 'Outros' },
      ],
      documentType: [
        { value: 'selected', text: 'Selecione uma opção' },
        { value: 1, text: 'RG' },
        { value: 2, text: 'CPF' },
        { value: 3, text: 'CNH' },
        { value: 4, text: 'Certidão de Nascimento' },
        { value: 5, text: 'Passaporte' },
      ],
    };
  },
  components: {
    InputBase,
    GenderSelect,
  },
};
</script>
