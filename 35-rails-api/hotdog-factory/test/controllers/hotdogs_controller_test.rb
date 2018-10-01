require 'test_helper'

class HotdogsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @hotdog = hotdogs(:one)
  end

  test "should get index" do
    get hotdogs_url
    assert_response :success
  end

  test "should get new" do
    get new_hotdog_url
    assert_response :success
  end

  test "should create hotdog" do
    assert_difference('Hotdog.count') do
      post hotdogs_url, params: { hotdog: { ingredients: @hotdog.ingredients, name: @hotdog.name } }
    end

    assert_redirected_to hotdog_url(Hotdog.last)
  end

  test "should show hotdog" do
    get hotdog_url(@hotdog)
    assert_response :success
  end

  test "should get edit" do
    get edit_hotdog_url(@hotdog)
    assert_response :success
  end

  test "should update hotdog" do
    patch hotdog_url(@hotdog), params: { hotdog: { ingredients: @hotdog.ingredients, name: @hotdog.name } }
    assert_redirected_to hotdog_url(@hotdog)
  end

  test "should destroy hotdog" do
    assert_difference('Hotdog.count', -1) do
      delete hotdog_url(@hotdog)
    end

    assert_redirected_to hotdogs_url
  end
end
