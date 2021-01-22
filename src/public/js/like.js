$(document).ready(function(){
  $("button.like").on('click', (e) => {
    console.log('id: ', e.currentTarget.id)
    const { id } = e.currentTarget
    $.ajax({
      type: 'put',
      url: `/blogs/${id}/like`,
    }).done(() => {
      console.log('done')
      console.log(e.currentTarget.firstChild)
      e.currentTarget.firstChild.textContent = parseInt(e.currentTarget.firstChild.textContent) + 1
    }).fail((e) => {
      console.log('failure', e)
    })
  })

  $("button.dislike").on('click', (e) => {
    console.log('id: ', e.currentTarget.id)
    const { id } = e.currentTarget
    $.ajax({
      type: 'put',
      url: `/blogs/${id}/dislike`,
    }).done(() => {
      console.log('done')
      console.log(e.currentTarget.firstChild)
      e.currentTarget.firstChild.textContent = parseInt(e.currentTarget.firstChild.textContent) + 1
    }).fail((e) => {
      console.log('failure', e)
    })
  })
});