require "application_system_test_case"

class HotdogsTest < ApplicationSystemTestCase
  setup do
    @hotdog = hotdogs(:one)
  end

  test "visiting the index" do
    visit hotdogs_url
    assert_selector "h1", text: "Hotdogs"
  end

  test "creating a Hotdog" do
    visit hotdogs_url
    click_on "New Hotdog"

    fill_in "Ingredients", with: @hotdog.ingredients
    fill_in "Name", with: @hotdog.name
    click_on "Create Hotdog"

    assert_text "Hotdog was successfully created"
    click_on "Back"
  end

  test "updating a Hotdog" do
    visit hotdogs_url
    click_on "Edit", match: :first

    fill_in "Ingredients", with: @hotdog.ingredients
    fill_in "Name", with: @hotdog.name
    click_on "Update Hotdog"

    assert_text "Hotdog was successfully updated"
    click_on "Back"
  end

  test "destroying a Hotdog" do
    visit hotdogs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Hotdog was successfully destroyed"
  end
end
