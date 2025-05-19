# frozen_string_literal: true

class InertiaExampleController < ApplicationController
  def index
    render inertia: 'Login', props: {
      name: params.fetch(:name, 'World'),
    }
  end
end
