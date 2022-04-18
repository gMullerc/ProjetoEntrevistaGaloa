
    let expandir = document.querySelector(".cartao__link").addEventListener('click', () =>{
      
      document.querySelector('.cartao__resumo--paragrafo').style.display = 'none';
      document.querySelector('.cartao__link').style.display = 'none';
      
      document.querySelector('.cartao__resumo--paragrafo--active').style.display = 'block';
      document.querySelector('.cartao__link--active').style.display = 'flex';
      
    })

    
    let resumir = document.querySelector(".cartao__link--active").addEventListener('click', () =>{     
  
        document.querySelector('.cartao__resumo--paragrafo--active').style.display = 'none';
        document.querySelector('.cartao__link--active').style.display = 'none';

        document.querySelector('.cartao__resumo--paragrafo').style.display = 'block';
        document.querySelector('.cartao__link').style.display = 'flex';
        
      })


  