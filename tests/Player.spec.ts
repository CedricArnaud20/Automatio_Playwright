import { test, expect } from '@playwright/test';

test('Tocar música', async ({ page }) => {

  const song ={
      id: 1,
      title: "Smells Like TestScript",
      artist: "Nullvana",
      description: "Nullvana",
      image: "https://raw.githubusercontent.com/qaxperience/mock/main/covers/nevertesting.jpg",
      type: "album",
      src: "https://raw.githubusercontent.com/qaxperience/mock/main/songs/nirvana.mp3"
    
  }

  await page.route('**/songs',route => route.fulfill({
    status: 200,
    body: JSON.stringify([song])
  })) 


  await page.goto('/');

  // Expect a title "to contain" a substring.

  const usuario = page.locator('.logged-user')
  await expect(usuario).toHaveText('Fernando Papito');


  // await page.click('//div[contains(@class,"song")]//h6[text()="Bughium"]/..//button')
  // await page.waitForTimeout(5000)


  const songCard = page.locator('.song').filter({hasText: song.title})


  const play = songCard.locator('.play')
  const pause = songCard.locator('.pause')


  await play.click()
  await expect(pause).toBeVisible({timeout: 2000})
  await expect(play).toBeVisible({timeout: 7000})

  //await page.waitForTimeout(5000)


});
