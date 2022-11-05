import { render, screen, waitFor } from "@testing-library/react"
import App from "./App"


beforeEach(() => {
// sets everything back to initial state before each test
fetch.resetMocks();
})

test("receives GitHub name", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'Fabian Soriano'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('Fabian Soriano')
  })

  test("receives GitHub URL", async () => {
    fetch.mockResponseOnce(JSON.stringify({html_url: 'https://github.com/FSorianoCoding'}))
    render(<App />)
    const gitHubURL = await waitFor(() => screen.getByRole('link'))
    expect(gitHubURL).toHaveAttribute('href', expect.stringContaining('github.com'))
  })

  